import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import Anchor from "@/components/common/Anchor";
import H3 from "@/components/common/H3";
import {
  type DiaryItem,
  Photo,
  PhotoWrapper,
  diaryItemsByYear,
  renderBody,
} from "../utils";

const Flow = styled.div`
  position: fixed;
  left: 28px;
  bottom: 20px;
  z-index: 10;
`;

const Columns = styled.div`
  height: 100dvh;
  display: flex;
  overflow: hidden;
  background: #e8e8e8;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
`;

const Header = styled.div<{ isActive: boolean }>`
  color: ${(p) => (p.isActive ? "#333" : "#aaa")};
  padding: 8px 24px;
  border-bottom: 1px solid ${(p) => (p.isActive ? "#333" : "#eee")};
  font-weight: 600;
  flex-shrink: 0;
  transition: color 0.2s, border-color 0.2s;
`;

const HeaderRange = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin-left: 16px;
  display: inline-block;
`;

const Scrollable = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
  position: relative;
`;

const Entry = styled.div`
  margin-bottom: 20px;
`;

const H3Inner = styled(H3)`
  color: #666;
`;

const [LATEST_YEAR, LATEST_MONTH] = (() => {
  let ly = 0;
  let lm = 0;
  for (const [ys, items] of Object.entries(diaryItemsByYear)) {
    const fy = Number(ys);
    for (const { date } of items) {
      const matched = date.match(/^\d{4}\/(\d{1,2})/);
      if (matched) {
        const month = Number(matched[1]);
        if (fy > ly || (fy === ly && month > lm)) {
          ly = fy;
          lm = month;
        }
      }
    }
  }
  return [ly, lm];
})();

/** 指定した年月に n ヶ月を加算した [year, month] を返す */
const addMonths = (
  year: number,
  month: number,
  n: number,
): [number, number] => {
  const total = year * 12 + (month - 1) + n;
  return [Math.floor(total / 12), (total % 12) + 1];
};

/** 年月を通算月数に変換する */
const toTotalMonths = (year: number, month: number) => {
  return year * 12 + month;
};

const PERIODS = [2, 1, 0].map((i) => {
  const [endY, endM] = addMonths(LATEST_YEAR, LATEST_MONTH, -12 * i);
  const [startY, startM] = addMonths(LATEST_YEAR, LATEST_MONTH, -11 - 12 * i);
  return {
    label: (["2年前", "1年前", "今年"] as const)[2 - i],
    rangeLabel: `${startY}/${startM}-${endY}/${endM}`,
    startTotalMonths: toTotalMonths(startY, startM),
    endTotalMonths: toTotalMonths(endY, endM),
  };
});

/**
 * 全年分の `diaryItemsByYear` から指定した通算月数の範囲に含まれるエントリを抽出する。
 * 複数の年ファイルをまたぐ場合も考慮して、日付昇順にソートする。
 */
const getItemsForWindow = (
  startTotalMonths: number,
  endTotalMonths: number,
): DiaryItem[] => {
  const entries: Array<{ item: DiaryItem; sortKey: number }> = [];
  for (const [ys, items] of Object.entries(
    diaryItemsByYear as Record<string, DiaryItem[]>,
  )) {
    const fileYear = Number(ys);
    for (const item of items) {
      let totalMonths: number | null = null;
      let sortKey: number | null = null;
      const dm = item.date.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})/);
      if (dm) {
        // 通常エントリ：日付文字列から年月日を取得
        const [, y, m, d] = dm.map(Number);
        totalMonths = toTotalMonths(y, m);
        sortKey = y * 10000 + m * 100 + d;
      } else {
        const fm = item.date.match(/^(\d+)\s*月のふりかえり$/);
        if (fm) {
          // ふりかえりエントリ：月末扱いにするため日を 99 とする
          totalMonths = toTotalMonths(fileYear, Number(fm[1]));
          sortKey = fileYear * 10000 + Number(fm[1]) * 100 + 99;
        }
      }
      if (
        totalMonths !== null &&
        sortKey !== null &&
        totalMonths >= startTotalMonths &&
        totalMonths <= endTotalMonths
      ) {
        entries.push({ item, sortKey });
      }
    }
  }
  entries.sort((a, b) => a.sortKey - b.sortKey);
  return entries.map(({ item }) => item);
};

const PERIOD_ITEMS = PERIODS.map((p) =>
  getItemsForWindow(p.startTotalMonths, p.endTotalMonths),
);

/**
 * `2024/1/1` -> `1/1`、`1月のふりかえり` -> `1ふ` に変換する
 */
const getDateKey = (date: string) => {
  const matched = date.match(/^\d{4}\/(\d{1,2}\/\d{1,2})/);
  if (matched) {
    return matched[1];
  }
  const furikaeri = date.match(/^(\d+)\s*月のふりかえり$/);
  if (furikaeri) {
    return `${furikaeri[1]}ふ`;
  }
  return date;
};

/**
 * 日付キーを比較用の数値に変換する。
 * ふりかえりは同月の日付より後ろに来るよう大きい値にする。
 * @example `3/15` -> 315, `3ふ` -> 39999。
 */
const keyToNum = (key: string) => {
  if (key.endsWith("ふ")) {
    return Number.parseInt(key) * 10000 + 9999;
  }
  const [m, d] = key.split("/").map(Number);
  return m * 100 + d;
};

/**
 * items の中から target に最も近い日付キーを持つエントリのキーを返す
 */
const findClosestKey = (items: DiaryItem[], target: string) => {
  if (!items.length) {
    return null;
  }
  const targetNum = keyToNum(target);
  let best = items[0];
  let minimumDiff = Number.POSITIVE_INFINITY;
  for (const item of items) {
    const diff = Math.abs(keyToNum(getDateKey(item.date)) - targetNum);
    if (diff < minimumDiff) {
      minimumDiff = diff;
      best = item;
    }
  }
  return getDateKey(best.date);
};

interface ColumnProps {
  /** 相対ラベル（「今年」「1年前」「2年前」等） */
  label: string;
  /** 表示対象の期間（例: 2025/–2026/4） */
  rangeLabel: string;
  /** 表示する日記エントリの一覧 */
  items: DiaryItem[];
  /** アクティブ列のスクロール位置から算出された日付キー */
  activeDateKey: string;
  /** この列がアクティブかどうか */
  isActive: boolean;
  /** マウスオーバーやタッチ開始時にこの列をアクティブにするコールバック */
  onActivate: () => void;
  /** アクティブ列のスクロールに応じて共有日付キーを更新するコールバック */
  onDateChange: (key: string) => void;
}

const DiaryColumn = ({
  label,
  rangeLabel,
  items,
  activeDateKey,
  isActive,
  onActivate,
  onDateChange,
}: ColumnProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef(new Map<string, HTMLDivElement>());

  // アクティブでない列は、対応する日付までスクロールする
  useEffect(() => {
    if (isActive) {
      return;
    }
    const key = findClosestKey(items, activeDateKey);
    if (!key) {
      return;
    }
    const entryElement = entryRefs.current.get(key);
    const container = scrollRef.current;
    if (entryElement && container) {
      container.scrollTop = entryElement.offsetTop - 16;
    }
  }, [activeDateKey, isActive, items]);

  // アクティブな列のスクロール位置から共有日付を更新する
  const handleScroll = useCallback(() => {
    if (!isActive) {
      return;
    }
    const container = scrollRef.current;
    if (!container) {
      return;
    }
    const scrollTop = container.scrollTop;

    let topKey = getDateKey(items[0]?.date ?? "");
    for (const item of items) {
      const key = getDateKey(item.date);
      const entryElement = entryRefs.current.get(key);
      if (!entryElement) {
        continue;
      }
      if (entryElement.offsetTop <= scrollTop + 24) {
        topKey = key;
      } else {
        break;
      }
    }
    onDateChange(topKey);
  }, [isActive, items, onDateChange]);

  return (
    <Column onMouseEnter={onActivate} onTouchStart={onActivate}>
      <Header isActive={isActive}>
        {label}
        <HeaderRange>{rangeLabel}</HeaderRange>
      </Header>
      <Scrollable ref={scrollRef} onScroll={handleScroll}>
        {items.map(({ date, body, photo }) => {
          const key = getDateKey(date);
          return (
            <Entry
              key={date}
              ref={(el) => {
                if (el) {
                  entryRefs.current.set(key, el);
                } else {
                  entryRefs.current.delete(key);
                }
              }}
            >
              <H3Inner>{date}</H3Inner>
              {renderBody(body)}
              {photo && (
                <PhotoWrapper href={`/assets/diary/${photo.src}`}>
                  <Photo src={`/assets/diary/${photo.src}`} alt={photo.alt} />
                </PhotoWrapper>
              )}
            </Entry>
          );
        })}
      </Scrollable>
    </Column>
  );
};

const Index = () => {
  const [activeColumn, setActiveColumn] = useState(0);
  const [activeDateKey, setActiveDateKey] = useState(() => {
    const first = WINDOW_ITEMS[0][0];
    return first ? getDateKey(first.date) : "1/1";
  });

  return (
    <>
      <Helmet>
        <title>日報（3年分の比較）｜いなにわうどん.みんな</title>
      </Helmet>
      <Flow>
        <Anchor href="/articles/diary">日報に戻る</Anchor>
      </Flow>
      <Columns>
        {PERIODS.map((period, i) => (
          <DiaryColumn
            key={period.rangeLabel}
            label={period.label}
            rangeLabel={period.rangeLabel}
            items={PERIOD_ITEMS[i]}
            activeDateKey={activeDateKey}
            isActive={activeColumn === i}
            onActivate={() => setActiveColumn(i)}
            onDateChange={setActiveDateKey}
          />
        ))}
      </Columns>
    </>
  );
};

export default Index;
