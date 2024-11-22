import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

import { photos } from "@/app/photos/const";
import logo from "@/assets/index/logo2.svg";
import Anchor from "@/components/common/Anchor";
import AnchorListItem from "@/components/common/AnchorListItem";
import CustomList from "@/components/common/CustomList";
import H2 from "@/components/common/H2";
import Header from "@/components/common/Header";
import { locations } from "../locations/locations";
import LinkList from "./LinkList";
import Nengajo from "./Nengajo";
import { creations } from "./const/creation";

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 30px 50px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TopContent = styled.div`
  flex: 1;
`;

const H1 = styled.h1`
  margin: 0;

  img {
    max-width: min(450px, 100%);
  }
`;

const ListWrapper = styled.div`
  margin-top: 8px;
`;

const Divider = styled.span`
  width: 24px;
  height: 1px;
  margin: 4px 16px;
  display: inline-block;
  background: #666;
`;

const Main = () => {
  return (
    <>
      <Helmet>
        <title>いなにわうどん.みんな</title>
      </Helmet>
      <Wrapper>
        <Top>
          <TopContent>
            <H1>
              <img src={logo} height={36} alt="いなにわうどん.みんな" />
            </H1>
            <section>
              <H2>写真</H2>
              <CustomList>
                {photos.map(({ title, data }, index) =>
                  data ? (
                    <AnchorListItem
                      href={`/photos/${data.key}`}
                      title={title}
                      key={index}
                    />
                  ) : (
                    <li key={title}>
                      <del>{title}</del>
                    </li>
                  ),
                )}
              </CustomList>
            </section>
            <section>
              <H2>移動記</H2>
              <CustomList>
                {locations.map(({ title, id }) => (
                  <AnchorListItem
                    href={`/locations/${id}`}
                    title={title}
                    key={id}
                  />
                ))}
              </CustomList>
            </section>
            <section>
              <H2>文章など</H2>
              <CustomList>
                <li>
                  <Anchor href="/articles">書いたもの・こと</Anchor>（
                  <Anchor href="/feed/feed.xml">RSS</Anchor>・
                  <Anchor href="feed/atom.xml">Atom</Anchor>・
                  <Anchor href="/feed/feed.json">JSON</Anchor>）
                </li>
                <li>
                  <Anchor href="/tsukuba-meshi">
                    つくばらーめん・飲食店情報
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/tanka">
                    /tanka（みんなで作る短歌投稿ページ）
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/nerene">ネレネー山脈</Anchor>
                </li>
                <li>
                  <Anchor href="/articles/diary">日記</Anchor>
                </li>
                <li>
                  <Anchor href="/class-impression">授業感想</Anchor>
                  <ListWrapper>
                    <CustomList>
                      <li>
                        2023 年度：
                        <Anchor href="/class-impression/2023spring">
                          春学期
                        </Anchor>
                        ｜
                        <Anchor href="/class-impression/2023autumn">
                          秋学期
                        </Anchor>
                      </li>
                      <li>
                        2022 年度：
                        <Anchor href="/class-impression/2022spring">
                          春学期
                        </Anchor>
                        ｜
                        <Anchor href="/class-impression/2022autumn">
                          秋学期
                        </Anchor>
                      </li>
                      <li>
                        2021 年度：
                        <Anchor href="/class-impression/2021spring">
                          春学期
                        </Anchor>
                        ｜
                        <Anchor href="/class-impression/2021autumn">
                          秋学期
                        </Anchor>
                      </li>
                    </CustomList>
                  </ListWrapper>
                </li>
                <li>
                  <Anchor href="/tasks">やること・やったこと</Anchor>
                </li>
                <li>
                  <del>Twight 関連リンク（工事中）</del>
                </li>
                <li>
                  <Anchor href="/kdb">KdB もどき関連リンク</Anchor>
                </li>
              </CustomList>
            </section>
            <section style={{ marginTop: "24px" }}>
              <CustomList>
                {creations.map((creation) => (
                  <li key={creation.url}>
                    <Anchor href={creation.url}>{creation.title}</Anchor>
                  </li>
                ))}
              </CustomList>
            </section>
          </TopContent>
          <TopContent>
            <Nengajo />
            <LinkList />
            <p>
              <Anchor href="/about">about</Anchor>
              <Divider />
              ソースコードを{" "}
              <Anchor href="https://github.com/inaniwaudon/inaniwaudon-minna2">
                GitHub
              </Anchor>{" "}
              で公開しています
            </p>
          </TopContent>
        </Top>
      </Wrapper>
      <Header />
    </>
  );
};

export default Main;
