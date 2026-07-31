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
import { getTodayHours } from "./opening";
import {
  areaGroups,
  timeFilters,
  useRestaurantFilter,
} from "./useRestaurantFilter";

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
  gap: 6px;
`;

const chipOrButton = css`
  line-height: 1.5;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 13px;
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

const TodayHours = styled.span<{ $closed: boolean }>`
  color: ${({ $closed }) => ($closed ? "#e08020" : "#888")};
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
  const todayHours = getTodayHours(restaurant.name);
  return (
    <RestaurantItem closed={closed}>
      <Name closed={closed}>
        {restaurant.name}
        {suffix}
      </Name>
      {restaurant.starred && <Star>★</Star>}
      {content?.address && <Address>{content.address}</Address>}
      {todayHours && (
        <TodayHours $closed={todayHours === "本日休み"}>
          {todayHours}
        </TodayHours>
      )}
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
  const {
    searchQuery,
    setSearchQuery,
    selectedGenres,
    toggleGenre,
    selectedAreas,
    toggleArea,
    selectedTimeFilter,
    setSelectedTimeFilter,
    visibleGenres,
    visibleRestaurants,
  } = useRestaurantFilter();

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
            <FilterLabel>営業時間（今日の○○時点に営業している）</FilterLabel>
            <FilterGenre>
              {timeFilters.map((f) => (
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
                    onChange={() => toggleGenre(g.name)}
                  />
                  {g.name}
                </FilterChip>
              ))}
              {["未遂", "閉店"].map((label) => (
                <FilterChip key={label} $checked={selectedGenres.has(label)}>
                  <input
                    type="checkbox"
                    checked={selectedGenres.has(label)}
                    onChange={() => toggleGenre(label)}
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
                    onChange={() => toggleArea(label)}
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
                const todayHours = getTodayHours(restaurant.name);
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
                            marginTop: "6px",
                          }}
                        >
                          {content.address}
                        </div>
                      )}
                      {todayHours && (
                        <div
                          style={{
                            fontSize: "12px",
                            color:
                              todayHours === "本日休み" ? "#e08020" : "#888",
                            marginTop: "4px",
                          }}
                        >
                          {todayHours}
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
          最終更新：2026/7/31．記載漏れやミスは Twitter：@kyoto_inaniwa または
          me[at]yokohama.dev まで．
        </footer>
      </Main>
    </PageWrapper>
  );
};

export default Index;
