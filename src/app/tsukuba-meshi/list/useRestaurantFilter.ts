import { useState } from "react";
import { restaurantContents } from "./content";
import type { RestaurantEntry } from "./display";
import { genres } from "./display";
import { openings, type WeeklyTime } from "./opening";

/**
 * エリアグループの定義．
 * ラベルと住所に対するマッチ判定関数を持つ．
 */
export type AreaGroup = { label: string; match: (address: string) => boolean };

/** 住所の前方一致でエリアを分類するグループ定義．最後の「その他」は常にマッチする． */
export const areaGroups: AreaGroup[] = [
  { label: "天1", match: (a) => a.startsWith("天久保1丁目") },
  { label: "天2", match: (a) => a.startsWith("天久保2丁目") },
  { label: "天3", match: (a) => a.startsWith("天久保3丁目") },
  { label: "天4", match: (a) => a.startsWith("天久保4丁目") },
  { label: "春1", match: (a) => a.startsWith("春日1丁目") },
  { label: "春2", match: (a) => a.startsWith("春日2丁目") },
  { label: "春3", match: (a) => a.startsWith("春日3丁目") },
  { label: "春4", match: (a) => a.startsWith("春日4丁目") },
  { label: "天王台", match: (a) => a.startsWith("天王台") },
  {
    label: "桜・妻木・柴崎",
    match: (a) =>
      a.startsWith("桜") || a.startsWith("妻木") || a.startsWith("柴崎"),
  },
  { label: "吾妻", match: (a) => a.startsWith("吾妻") },
  {
    label: "研究学園・学園の森",
    match: (a) =>
      a.startsWith("研究学園") ||
      a.startsWith("学園の森") ||
      a.startsWith("学園南"),
  },
  {
    label: "筑穂・要・花畑・大曽根・栗原",
    match: (a) =>
      a.startsWith("筑穂") ||
      a.startsWith("要") ||
      a.startsWith("花畑") ||
      a.startsWith("大曽根") ||
      a.startsWith("栗原"),
  },
  {
    label: "小野崎・苅間・松代",
    match: (a) =>
      a.startsWith("小野崎") || a.startsWith("苅間") || a.startsWith("松代"),
  },
  {
    label: "竹園・東新井",
    match: (a) => a.startsWith("竹園") || a.startsWith("東新井"),
  },
  {
    label: "東平塚・西平塚",
    match: (a) => a.startsWith("東平塚") || a.startsWith("西平塚"),
  },
  { label: "その他", match: () => true },
];

/** 営業時間フィルタの選択肢．「営業中」「残り時間」「閉店時刻」の3種類を含む． */
export const timeFilters = [
  "現在",
  "現在–30分後",
  "現在–1時間後",
  "現在–2時間後",
  "11時",
  "12時",
  "13時",
  "14時",
  "15時",
  "16時",
  "17時",
  "18時",
  "19時",
  "20時",
  "21時",
  "22時",
  "23時",
  "24時",
] as const;

/**
 * 住所文字列から対応するエリアラベルを返す．
 * @param address 住所文字列
 * @returns `areaGroups` の中で最初にマッチしたラベル．いずれも一致しない場合は `"その他"`．
 */
const getAreaLabel = (address: string): string => {
  for (const group of areaGroups) {
    if (group.match(address)) {
      return group.label;
    }
  }
  return "その他";
};

export type TimeFilter = (typeof timeFilters)[number];

type OpeningData = (typeof openings)[keyof typeof openings];

/** 1週間の総分数（日付をまたぐ営業時間の折り返し計算に使用）． */
const WEEK_MINUTES = 7 * 1440;

/**
 * {@link WeeklyTime} を週頭（日曜0時）からの通算分に変換する．
 * @param wt {@link WeeklyTime}
 */
const toTotalMinutes = (wt: WeeklyTime) => {
  return wt.day * 1440 + wt.hour * 60 + wt.minute;
};

/**
 * 指定した通算分が営業時間区間内かどうかを判定する．
 * 日付をまたぐ区間（`from > to`）にも対応する．
 * @param from 区間の開始を示す {@link WeeklyTime}
 * @param to 区間の終了を示す {@link WeeklyTime}
 * @param nowMin 現在の週頭からの通算分
 */
const isInPeriod = (
  from: WeeklyTime,
  to: WeeklyTime,
  nowMin: number,
): boolean => {
  const fromMin = toTotalMinutes(from);
  const toMin = toTotalMinutes(to);
  return fromMin <= toMin
    ? nowMin >= fromMin && nowMin <= toMin
    : nowMin >= fromMin || nowMin <= toMin;
};

/**
 * 閉店時刻まで何分あるかを返す．閉店時刻が現在より前の場合は週をまたいで計算する．
 * @param to 閉店時刻を示す {@link WeeklyTime}
 * @param nowMin 現在の週頭からの通算分
 */
const minutesUntilClose = (to: WeeklyTime, nowMin: number): number => {
  const toMin = toTotalMinutes(to);
  return toMin >= nowMin ? toMin - nowMin : WEEK_MINUTES - nowMin + toMin;
};

/**
 * `Set` に `key` が含まれていれば削除，なければ追加した新しい `Set` を返す．
 * @param prev 元の Set
 * @param key トグルするキー
 */
const toggleSet = (prev: Set<string>, key: string): Set<string> => {
  const next = new Set(prev);
  if (next.has(key)) {
    next.delete(key);
  } else {
    next.add(key);
  }
  return next;
};

/**
 * レストラン一覧のフィルタリング状態と操作を提供するカスタムフック．
 */
export const useRestaurantFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [selectedAreas, setSelectedAreas] = useState<Set<string>>(new Set());
  const [selectedTimeFilter, setSelectedTimeFilter] =
    useState<TimeFilter | null>(null);

  /**
   * 検索クエリに対してレストラン名が部分一致するかを返す．
   * クエリが空の場合常に `true`．
   */
  const matchesSearch = (restaurant: RestaurantEntry): boolean => {
    if (!searchQuery) {
      return true;
    }
    return restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  /**
   * 選択中のエリアにレストランの住所が含まれるかを返す．
   * エリア未選択の場合常に `true`
   */
  const matchesArea = (restaurant: RestaurantEntry): boolean => {
    if (selectedAreas.size === 0) {
      return true;
    }
    const address = restaurantContents[restaurant.name]?.address;
    if (!address) {
      return false;
    }
    return selectedAreas.has(getAreaLabel(address));
  };

  /**
   * 「未遂」「閉店」フィルタに対してレストランのステータスが一致するかを返す．
   * どちらも未選択の場合常に `true`．
   */
  const matchesStatus = (restaurant: RestaurantEntry): boolean => {
    if (!selectedGenres.has("未遂") && !selectedGenres.has("閉店")) {
      return true;
    }
    const content = restaurantContents[restaurant.name];
    const closed = "closed" in content && content.closed;
    if (selectedGenres.has("未遂") && selectedGenres.has("閉店")) {
      return restaurant.unvisited === true || closed;
    }
    if (selectedGenres.has("未遂")) {
      return restaurant.unvisited === true;
    }
    if (selectedGenres.has("閉店")) {
      return closed;
    }
    return true;
  };

  /**
   * 選択中の時間フィルタの時点でレストランが営業中かどうかを返す．
   * フィルタ未選択の場合常に `true`．営業時間データが存在しない場合は `false`．
   */
  const matchesOpening = (restaurant: RestaurantEntry): boolean => {
    if (!selectedTimeFilter) {
      return true;
    }
    const opening = (openings as Record<string, OpeningData>)[restaurant.name];
    if (!opening) {
      return false;
    }
    if (opening.type === "24hours") {
      return true;
    }

    const now = new Date();
    const today = now.getDay();
    const nowMin = today * 1440 + now.getHours() * 60 + now.getMinutes();

    if (selectedTimeFilter === "現在") {
      return opening.periods.some((p) => isInPeriod(p.from, p.to, nowMin));
    }
    if (selectedTimeFilter === "現在–30分後") {
      return opening.periods.some(
        (p) =>
          isInPeriod(p.from, p.to, nowMin) &&
          minutesUntilClose(p.to, nowMin) >= 30,
      );
    }
    if (selectedTimeFilter === "現在–1時間後") {
      return opening.periods.some(
        (p) =>
          isInPeriod(p.from, p.to, nowMin) &&
          minutesUntilClose(p.to, nowMin) >= 60,
      );
    }
    if (selectedTimeFilter === "現在–2時間後") {
      return opening.periods.some(
        (p) =>
          isInPeriod(p.from, p.to, nowMin) &&
          minutesUntilClose(p.to, nowMin) >= 120,
      );
    }
    // その他：今日のその時刻が営業時間内かどうか
    const hour = parseInt(selectedTimeFilter, 10);
    const targetDay = hour < 24 ? today : (today + 1) % 7;
    const targetMin = targetDay * 1440 + (hour % 24) * 60;
    return opening.periods.some((p) => isInPeriod(p.from, p.to, targetMin));
  };

  /**
   * 全てのフィルタを AND で適用する．
   */
  const matches = (r: RestaurantEntry) => {
    return (
      matchesSearch(r) &&
      matchesArea(r) &&
      matchesStatus(r) &&
      matchesOpening(r)
    );
  };

  const selectedNormalGenres = new Set(
    [...selectedGenres].filter((g) => g !== "未遂" && g !== "閉店"),
  );

  const isFiltering =
    searchQuery !== "" ||
    selectedAreas.size > 0 ||
    selectedGenres.has("未遂") ||
    selectedGenres.has("閉店") ||
    selectedTimeFilter !== null;

  const visibleGenres = genres
    .filter(
      (g) =>
        selectedNormalGenres.size === 0 || selectedNormalGenres.has(g.name),
    )
    .map((g) => ({
      ...g,
      restaurants: g.restaurants?.filter(matches),
      subgenres: g.subgenres
        ?.map((sg) => ({ ...sg, restaurants: sg.restaurants.filter(matches) }))
        .filter((sg) => sg.restaurants.length > 0),
    }))
    .filter(
      (g) =>
        !isFiltering ||
        (g.restaurants?.length ?? 0) > 0 ||
        (g.subgenres?.length ?? 0) > 0,
    );

  const visibleRestaurants = visibleGenres.flatMap((g) => [
    ...(g.restaurants ?? []),
    ...(g.subgenres?.flatMap((sg) => sg.restaurants) ?? []),
  ]);

  return {
    searchQuery,
    setSearchQuery,
    selectedGenres,
    toggleGenre: (name: string) =>
      setSelectedGenres((prev) => toggleSet(prev, name)),
    selectedAreas,
    toggleArea: (label: string) =>
      setSelectedAreas((prev) => toggleSet(prev, label)),
    selectedTimeFilter,
    setSelectedTimeFilter,
    visibleGenres,
    visibleRestaurants,
  };
};
