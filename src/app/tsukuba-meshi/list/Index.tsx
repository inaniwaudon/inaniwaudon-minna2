import styled from "@emotion/styled";
import { useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { restaurantContents } from "./content";
import type { RestaurantEntry } from "./display";
import { genres } from "./display";

const Main = styled.main`
  max-width: 800px;
  line-height: 1.8;
`;

const TabBar = styled.div`
  display: flex;
  margin-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
`;

const Tab = styled.button<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? "#4285f4" : "#888")};
  font-size: 14px;
  margin-bottom: -2px;
  padding: 6px 40px;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? "#4285f4" : "transparent")};
  background: none;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
`;

const MapWrapper = styled.div`
  height: 520px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
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

const FilterChip = styled.label<{ $checked: boolean }>`
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  background: ${({ $checked }) => ($checked ? "#4285f4" : "#eee")};
  color: ${({ $checked }) => ($checked ? "white" : "#555")};

  input {
    display: none;
  }

  &:hover {
    border-color: #4285f4;
  }
`;

const RestaurantList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
`;

const RestaurantItem = styled.li<{ closed: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 2px 0;
  opacity: ${({ closed }) => (closed ? 0.6 : 1)};
`;

const Name = styled.span<{ closed: boolean }>`
  text-decoration: ${({ closed }) => (closed ? "line-through" : "none")};
`;

const Star = styled.span`
  color: #e08020;
  flex-shrink: 0;
`;

const Address = styled.span`
  font-size: 13px;
  color: #888;
  flex-shrink: 0;
`;

const MapsLink = styled.a`
  font-size: 12px;
  color: #4285f4;
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

const toggleSet = (prev: Set<string>, key: string): Set<string> => {
  const next = new Set(prev);
  if (next.has(key)) {
    next.delete(key);
  } else next.add(key);
  return next;
};

const sortKey = (r: RestaurantEntry) => {
  const closed = !!restaurantContents[r.name]?.closed;
  return (r.unvisited ? 1 : 0) + (closed ? 2 : 0);
};

const sorted = (rs: RestaurantEntry[]) =>
  [...rs].sort((a, b) => sortKey(a) - sortKey(b));

const title = "つくば飲食店リスト";
const description = "筑波大学周辺の飲食店一覧（知っている限り）です．";

const RestaurantRow = ({ restaurant }: { restaurant: RestaurantEntry }) => {
  const content = restaurantContents[restaurant.name];
  const closed = !!content?.closed;
  const suffix = closed ? "（閉店）" : restaurant.unvisited ? "（未遂）" : "";
  return (
    <RestaurantItem closed={closed}>
      <Name closed={closed}>
        {restaurant.name}
        {suffix}
      </Name>
      {restaurant.starred && <Star>★</Star>}
      {content?.address && <Address>{content.address}</Address>}
      {content?.mapsUrl && (
        <MapsLink
          href={content.mapsUrl}
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
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [selectedAreas, setSelectedAreas] = useState<Set<string>>(new Set());

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

  const visibleGenres = genres
    .filter((g) => selectedGenres.size === 0 || selectedGenres.has(g.name))
    .map((g) => ({
      ...g,
      restaurants: g.restaurants?.filter(matchesArea),
      subgenres: g.subgenres
        ?.map((sg) => ({
          ...sg,
          restaurants: sg.restaurants.filter(matchesArea),
        }))
        .filter((sg) => sg.restaurants.length > 0),
    }))
    .filter((g) => {
      if (selectedAreas.size === 0) {
        return true;
      }
      return (g.restaurants?.length ?? 0) > 0 || (g.subgenres?.length ?? 0) > 0;
    });

  const visibleRestaurants = visibleGenres.flatMap((g) => [
    ...(g.restaurants ?? []),
    ...(g.subgenres?.flatMap((sg) => sg.restaurants) ?? []),
  ]);

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
            リスト（{visibleRestaurants.length}店）
          </Tab>
          <Tab $active={view === "map"} onClick={() => setView("map")}>
            地図
          </Tab>
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
                const closed = !!content?.closed;
                const color = closed
                  ? "#bbb"
                  : restaurant.starred
                    ? "#e08020"
                    : "#4285f4";
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
                            marginTop: "4px",
                          }}
                        >
                          {content.address}
                        </div>
                      )}
                      {content?.mapsUrl && (
                        <div style={{ marginTop: "4px" }}>
                          <a
                            href={content.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "12px", color: "#4285f4" }}
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
          記載漏れやミスは Twitter：@kyoto_inaniwa または me[at]yokohama.dev
          まで
        </footer>
      </Main>
    </PageWrapper>
  );
};

export default Index;
