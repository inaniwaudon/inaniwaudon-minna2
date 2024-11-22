import styled from "@emotion/styled";

import AnchorListItem from "@/components/common/AnchorListItem";
import CustomList from "@/components/common/CustomList";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { photos } from "./const";

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const title = "写真";

const Index = () => {
  return (
    <PageWrapper title={title} path="/articles">
      <main>
        <TopHeader>
          <PageTitle>{title}</PageTitle>
        </TopHeader>
        <CustomList>
          {photos.map((photo) =>
            photo.data ? (
              <AnchorListItem
                key={photo.data?.key}
                href={`${photo.data?.key}`}
                title={photo.title}
              />
            ) : (
              <li key={photo.title}>
                <del>{photo.title}</del>
              </li>
            ),
          )}
        </CustomList>
      </main>
    </PageWrapper>
  );
};

export default Index;
