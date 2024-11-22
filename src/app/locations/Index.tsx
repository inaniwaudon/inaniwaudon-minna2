import styled from "@emotion/styled";

import AnchorListItem from "@/components/common/AnchorListItem";
import CustomList from "@/components/common/CustomList";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { locations } from "./locations";

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const title = "移動記";

const Index = () => {
  return (
    <PageWrapper
      title={title}
      description="21世紀はチェックインの世紀"
      path="/articles"
    >
      <main>
        <TopHeader>
          <PageTitle>{title}</PageTitle>
        </TopHeader>
        <CustomList>
          {locations.map((location) => (
            <AnchorListItem
              key={location.id}
              href={`${location.id}`}
              title={location.title}
            />
          ))}
        </CustomList>
      </main>
    </PageWrapper>
  );
};

export default Index;
