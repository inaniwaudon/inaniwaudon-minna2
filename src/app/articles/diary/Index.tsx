import styled from "@emotion/styled";

import Anchor from "@/components/common/Anchor";
import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { Photo, PhotoWrapper, diaryItems, renderBody } from "./utils";

const title = "日報";

const Main = styled.main`
  max-width: 800px;
  text-align: justify;
`;

const Index = () => {
  return (
    <PageWrapper title={title} path="/articles">
      <Main>
        <PageTitle>日報</PageTitle>
        <p style={{ marginBottom: "24px" }}>
          <Anchor href="/articles/diary/compare">3 年分の比較</Anchor>
        </p>
        {diaryItems.map(({ date, body, photo }) => (
          <div key={date}>
            <H3>{date}</H3>
            {renderBody(body)}
            {photo && (
              <PhotoWrapper
                href={`/assets/diary/${photo.src}`}
                target="_blank"
                rel="noreferrer"
              >
                <Photo src={`/assets/diary/${photo.src}`} alt={photo.alt} />
              </PhotoWrapper>
            )}
          </div>
        ))}
      </Main>
    </PageWrapper>
  );
};

export default Index;
