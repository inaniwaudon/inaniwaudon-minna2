import styled from "@emotion/styled";

import Anchor from "@/components/common/Anchor";
import CustomList from "@/components/common/CustomList";
import H2 from "@/components/common/H2";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const ImageAnchor = styled.a`
  width: 50%;
  max-width: 300px;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`;

const title = "つくばらーめん・飲食店情報";
const description = "激ウマ店舗を独断と偏見でセレクト。再配布等ご自由に";

const Index = () => {
  return (
    <PageWrapper title={title} description={description} path="/tsukuba-meshi">
      <main>
        <PageTitle>{title}</PageTitle>
        <p>{description}</p>

        <H2>2024 年度版</H2>
        <p>画像クリックで拡大します</p>
        <ImageWrapper>
          <ImageAnchor href="/docs/tsukuba-ramen2024.webp">
            <Image src="/docs/tsukuba-ramen2024.webp" />
          </ImageAnchor>
        </ImageWrapper>
        <CustomList>
          <li>
            つくば らーめん 10 選 2024：
            <Anchor href="/docs/tsukuba-ramen2024.pdf">PDF 版（1.5 MB）</Anchor>
            ｜<Anchor href="/tsukuba-meshi/ramen2024">HTML 版</Anchor>
          </li>
        </CustomList>

        <H2>2023 年度版</H2>
        <p>画像クリックで拡大します</p>
        <ImageWrapper>
          <ImageAnchor href="/docs/tsukuba-meshi2023.webp">
            <Image src="/docs/tsukuba-meshi2023.webp" />
          </ImageAnchor>
          <ImageAnchor href="/docs/tsukuba-ramen2023.webp">
            <Image src="/docs/tsukuba-ramen2023.webp" />
          </ImageAnchor>
        </ImageWrapper>
        <CustomList>
          <li>
            つくば おすすめ飲食店 2023：
            <Anchor href="/docs/tsukuba-meshi2023.pdf">PDF 版（3.4 MB）</Anchor>
            ｜<Anchor href="/tsukuba-meshi/restaurant2023">HTML 版</Anchor>
          </li>
          <li>
            つくば らーめん 10 選 2023：
            <Anchor href="/docs/tsukuba-ramen2023.pdf">PDF 版（1.2 MB）</Anchor>
            ｜<Anchor href="/tsukuba-meshi/ramen2023">HTML 版</Anchor>
          </li>
          <li>
            <Anchor href="/tsukuba-meshi/errata2023">正誤表</Anchor>
          </li>
        </CustomList>

        <H2>2022 年度版</H2>
        <CustomList>
          <li>
            <Anchor href="/docs/tsukuba-ramen2022.pdf">
              つくば らーめん 10 選（PDF, 1.5 MB）
            </Anchor>
          </li>
        </CustomList>
      </main>
    </PageWrapper>
  );
};

export default Index;
