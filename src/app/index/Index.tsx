import styled from "@emotion/styled";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";

import { photos } from "@/app/photos/const";
import jikan from "@/assets/index/jikan.webp";
import logo from "@/assets/index/logo2.svg";

import s210on from "@/assets/index/links/210on.svg";
import asaka from "@/assets/index/links/asaka.webp";
import charlotteace from "@/assets/index/links/charlotteace.webp";
import eka from "@/assets/index/links/eka.webp";
import iorinio from "@/assets/index/links/iorin-io.webp";
import itsudev from "@/assets/index/links/itsu-dev.svg";
import nakaya from "@/assets/index/links/nakaya.webp";

import Anchor, { linkColor } from "@/components/common/Anchor";
import AnchorListItem from "@/components/common/AnchorListItem";
import CustomList from "@/components/common/CustomList";
import Header from "@/components/common/Header";
import { getPhotoDir } from "@/lib/photo";
import { articleLinks } from "../articles/articles";
import { locations } from "../locations/locations";
import LinkList from "./LinkList";
import Nengajo from "./Nengajo";
import Watercolor from "./Watercolor";
import { creations } from "./const/creation";

const Wrapper = styled.main`
  height: 100vh;
  margin: 0 0;
  padding: 0 64px;
  display: flex;
  gap: 48px;
  overflow-x: scroll;
  overflow-y: hidden;

  @media screen and (max-width: 700px) {
    height: auto;
    padding: 32px 32px;
    display: block;
    overflow-x: hidden;
  }
`;

const Content = styled.div<{ emits?: boolean }>`
  flex: 500px 0 0;
  margin: -16px;
  padding: 56px 16px;
  overflow-y: scroll;

  @media screen and (max-width: 700px) {
    height: ${({ emits }) => (emits ? "300px" : "auto")};
    margin: 0 0 24px 0;
    padding: 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const H1 = styled.h1`
  height: 32px;
  margin: -4px 0 calc(16px + 1px + 4px) 0;

  img {
    max-width: min(450px, 100%);
  }
`;

const Description = styled.p`
  color: #666;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const H2 = styled.h2<{ top?: boolean }>`
  height: 32px;
  color: #555;
  font-weight: 300;
  margin: ${({ top }) => (top ? "0" : "24px")} 0 16px 0;
  padding-bottom: 12px;
  border-bottom: solid 1px #eee;

  a {
    color: #5d6c8d;
    text-decoration: none;
  }
`;

const WatercolorWrapper = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PhotoThumbnail = styled.div<{ src?: string }>`
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  flex: calc((100% - 16px) / 2) 0 0;
  background-color: #999;
  background-image: url(${(props) => props.src});
  background-size: cover;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  a {
    height: stretch;
    color: #fff;
    line-height: 1.4;
    text-decoration: none;
    text-shadow: 0 1px 4px #000;
    word-break: auto-phrase;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  h3 {
    font-weight: 300;
    margin: 0;
  }

  time {
    font-size: 0.8rem;
  }
`;

const CrossLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const CrossLink = styled.a`
  line-height: 1.2;
  color: ${linkColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-gap: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 96px;
    height: 96px;
    border: solid 1px #ccc;
    border-radius: 50%;
    margin-bottom: 8px;

    &.noborder {
      border: none;
    }
  }
`;

const Bunner = styled.div`
  margin-top: 32px;
`;

const Main = () => {
  const photoLinks = useMemo(
    () =>
      photos
        .flatMap((photos) => photos.data ?? [])
        .map(
          ({ key, title, date, photos }) => ({
            key,
            title,
            date,
            photo: photos[Math.floor(photos.length * Math.random())],
          }),
          [],
        ),
    [],
  );

  return (
    <>
      <Helmet>
        <title>いなにわうどん.みんな</title>
      </Helmet>
      <Wrapper>
        <Content>
          <H1>
            <img
              src={logo}
              width={450}
              height={36}
              alt="いなにわうどん.みんな"
            />
          </H1>
          <Description>
            横スクロールでページ全体を、縦スクロールで一部を移動します
          </Description>
          <H2>年賀状</H2>
          <Nengajo />
          <WatercolorWrapper>
            <H2>水彩</H2>
            <Watercolor />
          </WatercolorWrapper>
        </Content>
        <Content emits={true}>
          <H2 top={true}>
            <a href="/photos">写真</a>
          </H2>
          <Photos>
            {photoLinks.map(({ key, title, date, photo }) => (
              <PhotoThumbnail
                src={`${getPhotoDir(key)}/thumbnail/${photo.src}`}
                key={title}
              >
                <a href={`/photos/${key}`}>
                  <h3>{title}</h3>
                  <time>{date}</time>
                </a>
              </PhotoThumbnail>
            ))}
          </Photos>
        </Content>
        <Content emits={true}>
          <H2 top={true}>
            <a href="/articles">書いたもの・こと</a>
          </H2>
          <CustomList>
            {articleLinks.map(({ href, title, date, description }) => (
              <AnchorListItem
                href={href}
                date={date}
                description={description}
                title={title}
                key={href}
              />
            ))}
          </CustomList>
        </Content>
        <Content emits={true}>
          <H2 top={true}>
            <a href="/locations">移動記</a>
          </H2>
          <Photos>
            {locations.map(({ title, id, date, thumbnail }) => (
              <PhotoThumbnail src={thumbnail} key={title}>
                <a href={`/locations/${id}`}>
                  <h3>{title}</h3>
                  <time>{date}</time>
                </a>
              </PhotoThumbnail>
            ))}
          </Photos>
        </Content>
        <Content>
          <H2 top={true}>文章など</H2>
          <CustomList>
            <li>
              <Anchor href="/about">about</Anchor>
            </li>
            <li>
              <Anchor href="/articles">書いたもの・こと</Anchor>（
              <Anchor href="/feed/feed.xml">RSS</Anchor>・
              <Anchor href="feed/atom.xml">Atom</Anchor>・
              <Anchor href="/feed/feed.json">JSON</Anchor>）
            </li>
            <li>
              <Anchor href="/tsukuba-meshi">つくばらーめん・飲食店情報</Anchor>
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
              <div style={{ marginTop: "8px" }}>
                <CustomList>
                  <li>
                    2023 年度：
                    <Anchor href="/class-impression/2023spring">春学期</Anchor>
                    ｜
                    <Anchor href="/class-impression/2023autumn">秋学期</Anchor>
                  </li>
                  <li>
                    2022 年度：
                    <Anchor href="/class-impression/2022spring">春学期</Anchor>
                    ｜
                    <Anchor href="/class-impression/2022autumn">秋学期</Anchor>
                  </li>
                  <li>
                    2021 年度：
                    <Anchor href="/class-impression/2021spring">春学期</Anchor>
                    ｜
                    <Anchor href="/class-impression/2021autumn">秋学期</Anchor>
                  </li>
                </CustomList>
              </div>
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

          <H2>外部リンク</H2>
          <CustomList>
            {creations.map((creation) => (
              <li key={creation.url}>
                <Anchor href={creation.url}>{creation.title}</Anchor>
              </li>
            ))}
          </CustomList>
        </Content>
        <Content>
          <H2 top={true}>外部サービス</H2>
          <LinkList />

          <H2>相互リンク</H2>
          <CrossLinks>
            <CrossLink href="https://itsu.dev">
              <img src={itsudev} alt="" />
              itsu.dev
            </CrossLink>
            <CrossLink href="https://iorin.io">
              <img src={iorinio} alt="" />
              iorin.io
            </CrossLink>
            <CrossLink href="https://charlotteace.github.io">
              <img src={charlotteace} alt="" />
              シャーロット
              <br />
              エースの部屋
            </CrossLink>
            <CrossLink href="https://www.eniehack.net/~eniehack/mutual_links">
              <img src={nakaya} alt="" />
              なかやばし
            </CrossLink>
            <CrossLink href="https://210o.net">
              <img src={s210on} alt="" className="noborder" />
              210o.net
            </CrossLink>
            <CrossLink href="https://asaka.party">
              <img src={asaka} alt="" />
              asaka.party
            </CrossLink>
            <CrossLink href="https://www.eka.earth">
              <img src={eka} alt="" />
              eka.earth
            </CrossLink>
          </CrossLinks>
          <Bunner>
            <a href="https://sites.google.com/view/happy-busy/" rel="nofollow">
              <img src={jikan} alt="時間ねぇ〜" />
            </a>
          </Bunner>
          <p>
            ソースコードを{" "}
            <Anchor href="https://github.com/inaniwaudon/inaniwaudon-minna2">
              GitHub
            </Anchor>{" "}
            で公開しています
          </p>
        </Content>
      </Wrapper>
      <Header />
    </>
  );
};

export default Main;
