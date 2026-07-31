import styled from "@emotion/styled";
import { useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { css } from "@emotion/react";
import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { restaurantContents } from "./content";
import type { RestaurantEntry } from "./display";
import { genres } from "./display";
import { openings } from "./opening";

const keyColor = "#4285f4";
const starColor = "#e08020";

const Main = styled.main`
  max-width: 800px;
  line-height: 1.8;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 2px solid #ddd;
`;

const Tab = styled.button<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? keyColor : "#666")};
  font-size: 14px;
  margin-bottom: -2px;
  padding: 6px 40px;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? keyColor : "transparent")};
  background: none;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
`;

const RandomButton = styled.button`
  color: #fff;
  font-size: 15px;
  padding: 8px 24px 10px 24px;
  border-radius: 8px;
  background: ${keyColor};
  cursor: pointer;
  position: fixed;
  right: 24px;
  bottom: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

const MapWrapper = styled.div`
  height: 520px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  position: relative;

  .leaflet-popup-content {
    font-family: inherit;
  }
`;

const FilterSection = styled.div`
  margin: 8px 0 16px 0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
`;

const FilterLabel = styled.div`
  color: #666;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const FilterGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
`;

const chipOrButton = css`
  line-height: 1.8;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  box-sizing: content-box;
  border: none;
`;

const TimeFilterButton = styled.button<{ $active: boolean }>`
  ${chipOrButton}
  background: ${({ $active }) => ($active ? keyColor : "#eee")};
  color: ${({ $active }) => ($active ? "white" : "#666")};

  &:hover {
    opacity: 0.85;
  }
`;

const FilterChip = styled.label<{ $checked: boolean }>`
  ${chipOrButton}
  background: ${({ $checked }) => ($checked ? keyColor : "#eee")};
  color: ${({ $checked }) => ($checked ? "white" : "#666")};

  input {
    display: none;
  }

  &:hover {
    border-color: ${keyColor};
  }
`;

const RestaurantList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
`;

const RestaurantItem = styled.li<{ closed: boolean }>`
  line-height: 1.4;
  padding: 6px 0;
  opacity: ${({ closed }) => (closed ? 0.6 : 1)};
`;

const Name = styled.span<{ closed: boolean }>`
  text-decoration: ${({ closed }) => (closed ? "line-through" : "none")};
  margin-right: 8px;
`;

const Star = styled.span`
  color: ${starColor};
  margin-right: 8px;
`;

const Address = styled.span`
  color: #666;
  font-size: 13px;
  margin-right: 8px;
`;

const MapsLink = styled.a`
  font-size: 12px;
  color: ${keyColor};
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    text-decoration: underline;
  }
`;

type AreaGroup = { label: string; match: (address: string) => boolean };

const areaGroups: AreaGroup[] = [
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

const getAreaLabel = (address: string): string => {
  for (const group of areaGroups) {
    if (group.match(address)) return group.label;
  }
  return "その他";
};

type TimeFilter = (typeof TIME_FILTERS)[number];

const TIME_FILTERS = [
  "営業中",
  "30分以上",
  "1時間以上",
  "2時間以上",
  "20時まで",
  "21時まで",
  "22時まで",
  "23時まで",
  "24時まで",
] as const;

type WeeklyTime = { day: number; hour: number; minute: number };

type OpeningData = (typeof openings)[keyof typeof openings];

const WEEK_MINUTES = 7 * 1440;

const toTotalMinutes = (wt: WeeklyTime) =>
  wt.day * 1440 + wt.hour * 60 + wt.minute;

const isInPeriod = (
  from: WeeklyTime,
  to: WeeklyTime,
  nowMin: number,
): boolean => {
  const fromMin = toTotalMinutes(from);
  const toMin = toTotalMinutes(to);
  return fromMin <= toMin
    ? nowMin >= fromMin && nowMin < toMin
    : nowMin >= fromMin || nowMin < toMin;
};

const minutesUntilClose = (to: WeeklyTime, nowMin: number): number => {
  const toMin = toTotalMinutes(to);
  return toMin >= nowMin ? toMin - nowMin : WEEK_MINUTES - nowMin + toMin;
};

const getOpening = (name: string): OpeningData | undefined => {
  return (openings as Record<string, OpeningData | undefined>)[name];
};

const toggleSet = (prev: Set<string>, key: string): Set<string> => {
  const next = new Set(prev);
  if (next.has(key)) {
    next.delete(key);
  } else next.add(key);
  return next;
};

const sortKey = (r: RestaurantEntry) => {
  const content = restaurantContents[r.name];
  const closed = "closed" in content && content.closed;
  return (r.unvisited ? 1 : 0) + (closed ? 2 : 0);
};

const sorted = (rs: RestaurantEntry[]) =>
  [...rs].sort((a, b) => sortKey(a) - sortKey(b));

const title = "つくば飲食店リスト・地図";
const description = "筑波大学周辺の飲食店一覧（知っている限り）です．";

const RestaurantRow = ({ restaurant }: { restaurant: RestaurantEntry }) => {
  const content = restaurantContents[restaurant.name];
  const closed = "closed" in content && content.closed;
  const suffix = closed ? "（閉店）" : restaurant.unvisited ? "（未遂）" : "";
  return (
    <RestaurantItem closed={closed}>
      <Name closed={closed}>
        {restaurant.name}
        {suffix}
      </Name>
      {restaurant.starred && <Star>★</Star>}
      {content?.address && <Address>{content.address}</Address>}
      {"placeId" in content && content.placeId && (
        <MapsLink
          href={`https://www.google.com/maps/place/?q=place_id:${content.placeId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          地図
        </MapsLink>
      )}
    </RestaurantItem>
  );
};

const Index = () => {
  const [view, setView] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [selectedAreas, setSelectedAreas] = useState<Set<string>>(new Set());
  const [selectedTimeFilter, setSelectedTimeFilter] =
    useState<TimeFilter | null>(null);

  const matchesOpening = (restaurant: RestaurantEntry): boolean => {
    if (!selectedTimeFilter) return true;
    const opening = getOpening(restaurant.name);
    if (!opening) return false;
    if (opening.type === "24hours") return true;

    const now = new Date();
    const today = now.getDay();
    const nowMin = today * 1440 + now.getHours() * 60 + now.getMinutes();

    if (selectedTimeFilter === "営業中") {
      return opening.periods.some((p) => isInPeriod(p.from, p.to, nowMin));
    }
    if (selectedTimeFilter === "30分以上") {
      return opening.periods.some(
        (p) =>
          isInPeriod(p.from, p.to, nowMin) &&
          minutesUntilClose(p.to, nowMin) >= 30,
      );
    }
    if (selectedTimeFilter === "1時間以上") {
      return opening.periods.some(
        (p) =>
          isInPeriod(p.from, p.to, nowMin) &&
          minutesUntilClose(p.to, nowMin) >= 60,
      );
    }
    if (selectedTimeFilter === "2時間以上") {
      return opening.periods.some(
        (p) =>
          isInPeriod(p.from, p.to, nowMin) &&
          minutesUntilClose(p.to, nowMin) >= 120,
      );
    }
    // "20時まで" ~ "24時まで": open at target hour today
    const hour = parseInt(selectedTimeFilter, 10);
    const targetDay = hour < 24 ? today : (today + 1) % 7;
    const targetMin = targetDay * 1440 + (hour % 24) * 60;
    return opening.periods.some((p) => {
      const fromMin = toTotalMinutes(p.from);
      const toMin = toTotalMinutes(p.to);
      return fromMin <= toMin
        ? fromMin <= targetMin && targetMin <= toMin
        : targetMin >= fromMin || targetMin <= toMin;
    });
  };

  const matchesSearch = (restaurant: RestaurantEntry): boolean => {
    if (!searchQuery) {
      return true;
    }
    const query = searchQuery.toLowerCase();
    return restaurant.name.toLowerCase().includes(query);
  };

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

  const selectedNormalGenres = new Set(
    [...selectedGenres].filter((g) => g !== "未遂" && g !== "閉店"),
  );

  const visibleGenres = genres
    .filter(
      (g) =>
        selectedNormalGenres.size === 0 || selectedNormalGenres.has(g.name),
    )
    .map((g) => ({
      ...g,
      restaurants: g.restaurants?.filter(
        (r) =>
          matchesSearch(r) &&
          matchesArea(r) &&
          matchesStatus(r) &&
          matchesOpening(r),
      ),
      subgenres: g.subgenres
        ?.map((sg) => ({
          ...sg,
          restaurants: sg.restaurants.filter(
            (r) =>
              matchesSearch(r) &&
              matchesArea(r) &&
              matchesStatus(r) &&
              matchesOpening(r),
          ),
        }))
        .filter((sg) => sg.restaurants.length > 0),
    }))
    .filter((g) => {
      if (
        selectedAreas.size === 0 &&
        !selectedGenres.has("未遂") &&
        !selectedGenres.has("閉店") &&
        !selectedTimeFilter
      ) {
        return true;
      }
      return (g.restaurants?.length ?? 0) > 0 || (g.subgenres?.length ?? 0) > 0;
    });

  const visibleRestaurants = visibleGenres.flatMap((g) => [
    ...(g.restaurants ?? []),
    ...(g.subgenres?.flatMap((sg) => sg.restaurants) ?? []),
  ]);

  const pickRandom = () => {
    if (visibleRestaurants.length === 0) {
      alert("該当するお店がありません．");
      return;
    }
    const picked =
      visibleRestaurants[Math.floor(Math.random() * visibleRestaurants.length)];
    const content = restaurantContents[picked.name];
    const star = picked.starred ? " ★" : "";
    const address = content?.address ? `\n${content.address}` : "";
    alert(`${picked.name}${star}${address}`);
  };

  return (
    <PageWrapper
      title={title}
      description={description}
      path="/tsukuba-meshi/list"
    >
      <Main>
        <PageTitle>{title}</PageTitle>
        <p>
          {description}
          <br />★
          は特におすすめのお店，（未遂）はまだ行ったことのないお店，（閉店）は閉店したお店を示します．
        </p>
        <FilterSection>
          <SearchInput
            type="text"
            placeholder="店名で検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div>
            <FilterLabel>営業時間（今日の……営業）</FilterLabel>
            <FilterGenre>
              {TIME_FILTERS.map((f) => (
                <TimeFilterButton
                  key={f}
                  $active={selectedTimeFilter === f}
                  onClick={() =>
                    setSelectedTimeFilter((prev) => (prev === f ? null : f))
                  }
                >
                  {f}
                </TimeFilterButton>
              ))}
            </FilterGenre>
          </div>
          <div>
            <FilterLabel>ジャンル</FilterLabel>
            <FilterGenre>
              {genres.map((g) => (
                <FilterChip key={g.name} $checked={selectedGenres.has(g.name)}>
                  <input
                    type="checkbox"
                    checked={selectedGenres.has(g.name)}
                    onChange={() =>
                      setSelectedGenres((prev) => toggleSet(prev, g.name))
                    }
                  />
                  {g.name}
                </FilterChip>
              ))}
              {["未遂", "閉店"].map((label) => (
                <FilterChip key={label} $checked={selectedGenres.has(label)}>
                  <input
                    type="checkbox"
                    checked={selectedGenres.has(label)}
                    onChange={() =>
                      setSelectedGenres((prev) => toggleSet(prev, label))
                    }
                  />
                  {label}
                </FilterChip>
              ))}
            </FilterGenre>
          </div>
          <div>
            <FilterLabel>所在地</FilterLabel>
            <FilterGenre>
              {areaGroups.map(({ label }) => (
                <FilterChip key={label} $checked={selectedAreas.has(label)}>
                  <input
                    type="checkbox"
                    checked={selectedAreas.has(label)}
                    onChange={() =>
                      setSelectedAreas((prev) => toggleSet(prev, label))
                    }
                  />
                  {label}
                </FilterChip>
              ))}
            </FilterGenre>
          </div>
        </FilterSection>
        <TabBar>
          <Tab $active={view === "list"} onClick={() => setView("list")}>
            リスト（{visibleRestaurants.length} 店）
          </Tab>
          <Tab $active={view === "map"} onClick={() => setView("map")}>
            地図
          </Tab>
          <RandomButton onClick={pickRandom}>ランダムで選ぶ</RandomButton>
        </TabBar>
        {view === "map" && (
          <MapWrapper>
            <MapContainer
              center={[36.085, 140.103]}
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {visibleRestaurants.map((restaurant) => {
                const content = restaurantContents[restaurant.name];
                if (!content?.lat || !content?.lng) return null;
                const closed = "closed" in content && content.closed;
                const color = closed
                  ? "#bbb"
                  : restaurant.starred
                    ? starColor
                    : keyColor;
                const suffix = closed
                  ? "（閉店）"
                  : restaurant.unvisited
                    ? "（未遂）"
                    : "";
                return (
                  <CircleMarker
                    key={restaurant.name}
                    center={[content.lat, content.lng]}
                    radius={closed ? 5 : 7}
                    pathOptions={{
                      color,
                      fillColor: color,
                      fillOpacity: closed ? 0.4 : 0.8,
                      weight: 1.5,
                    }}
                  >
                    <Popup>
                      <strong style={{ fontSize: "14px" }}>
                        {restaurant.name}
                        {suffix}
                      </strong>
                      {content?.address && (
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#666",
                            marginTop: "6spx",
                          }}
                        >
                          {content.address}
                        </div>
                      )}
                      {"placeId" in content && content.placeId && (
                        <div style={{ marginTop: "4px" }}>
                          <a
                            href={`https://www.google.com/maps/place/?q=place_id:${content.placeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "13px",
                              color: keyColor,
                              textDecoration: "none",
                            }}
                          >
                            地図
                          </a>
                        </div>
                      )}
                    </Popup>
                  </CircleMarker>
                );
              })}
            </MapContainer>
          </MapWrapper>
        )}
        {view === "list" &&
          visibleGenres.map((genre) => (
            <section key={genre.name}>
              <H2>{genre.name}</H2>
              {genre.restaurants && genre.restaurants.length > 0 && (
                <RestaurantList>
                  {sorted(genre.restaurants).map((r) => (
                    <RestaurantRow key={r.name} restaurant={r} />
                  ))}
                </RestaurantList>
              )}
              {genre.subgenres?.map((sg) => (
                <div key={sg.name}>
                  <H3>{sg.name}</H3>
                  <RestaurantList>
                    {sorted(sg.restaurants).map((r) => (
                      <RestaurantRow key={r.name} restaurant={r} />
                    ))}
                  </RestaurantList>
                </div>
              ))}
            </section>
          ))}
        <footer>
          最終更新：2026/7/30．記載漏れやミスは Twitter：@kyoto_inaniwa または
          me[at]yokohama.dev まで．
        </footer>
      </Main>
    </PageWrapper>
  );
};

export default Index;
