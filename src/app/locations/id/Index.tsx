import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NotFound from "@/app/404/Index";
import PageWrapper from "@/components/common/PageWrapper";
import { fetchTransportation } from "../lib/api";
import type { Transportation } from "../lib/utils";
import CheckinContent from "./CheckinContent";
import Timeline from "./Timeline";

const Header = styled.header`
  margin-bottom: 24px;
`;

const HeaderAnchor = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:hover {
    color: #999;
  }
`;

const Time = styled.time`
  color: #999;
  display: block;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
`;

const TimelineWrapper = styled.div<{ hidable: boolean }>`
  flex: 0 0 340px;

  @media (width < 800px) {
    display: ${({ hidable }) => (hidable ? "none" : "block")};
  }
`;

const CheckinContentWrapper = styled.div<{ hidable: boolean }>`
  flex: 0 1 500px;

  @media (width < 800px) {
    display: ${({ hidable }) => (hidable ? "none" : "block")};
  }
`;

const CheckinAnchor = styled(Link)`
  width: 32px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  background: hsla(40, 60%, 50%, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 32px;
  right: 32px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

// TODO: タイルビューとタイムラインビュー
const Index = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [transportation, setTransportation] = useState<Transportation>();
  const [loading, setLoading] = useState(true);

  const checkinParam = searchParams.get("checkin");

  const path = `/locations/${id}`;

  useEffect(() => {
    (async () => {
      const result = await fetchTransportation(id ?? "");
      if (result.success) {
        setTransportation(result.value);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!id || !transportation) {
    return <NotFound />;
  }

  const { title, date, checkins } = transportation;
  const paramsIndex = checkins.findIndex(
    (checkin) => checkin.id === checkinParam,
  );
  const selectedIndex = paramsIndex > -1 ? paramsIndex : 0;

  return (
    <PageWrapper title={title} path={path}>
      <HeaderAnchor to={path}>
        <Header>
          <Time>{date}</Time>
          <Title>{title}</Title>
        </Header>
      </HeaderAnchor>
      <Content>
        <TimelineWrapper hidable={checkinParam !== undefined}>
          <Timeline id={id} checkins={checkins} />
        </TimelineWrapper>
        <CheckinContentWrapper hidable={checkinParam === undefined}>
          <CheckinContent id={id} checkin={checkins[selectedIndex]} />
        </CheckinContentWrapper>
      </Content>
      <CheckinAnchor to={`/locations/${id}/checkin`}>
        <MdAdd />
      </CheckinAnchor>
    </PageWrapper>
  );
};

/*export const generateMetadata = async ({
  params,
  searchParams,
}: PageProps): Promise<Metadata> => {
  const result = await fetchTransportation(params.id);
  if (!result.success) {
    return {};
  }

  const { checkins } = result.value;
  const paramsIndex = checkins.findIndex(
    (checkin) => checkin.id === searchParams.checkin,
  );
  const checkin = checkins[paramsIndex];

  const partTitle = checkin
    ? `${checkin.location} – ${result.value.title}`
    : result.value.title;
  const title = `${partTitle}｜いなにわうどん.みんな`;
  const description = checkin ? checkin.description : "";
  const images = checkin?.photos[0]
    ? [getImageUrl(params.id, checkin.photos[0]?.src)]
    : undefined;

  return {
    title: partTitle,
    description,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
      card: "summary",
      images,
    },
  };
};*/

export default Index;
