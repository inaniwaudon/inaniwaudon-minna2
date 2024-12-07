import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";
import { useMemo, useState } from "react";
import Anchor from "./Anchor";
import CustomList from "./CustomList";

const Wrapper = styled.header<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 200ms;
`;

const Content = styled.div`
  width: 300px;
  margin: 8px 16px;
`;

const Border = styled.div`
  width: 4px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const Point = styled.div`
  height: 8px;
  flex: 8px 0 0;
  margin: 0 28px 0 -${8 + 28}px;
  border-radius: 50%;
  background: rgb(223, 81, 168);
`;

const pointer = keyframes`
  0%{
    width: 8px;
    height: 8px;
    margin: ${(64 - 8) / 2}px;
    opacity: 0.2;
    left: -32px;
  }
  100% {
    width: 64px;
    height: 64px;
    margin: 0;
    opacity: 0;
    left: -24px;
  }
`;

const Pointer = styled.div<{ y: number }>`
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  position: fixed;
  top: ${({ y }) => y}px;
  animation: ${pointer} 1000ms;
`;

const items: { title: string; href: string }[] = [
  {
    title: "いなにわうどん.みんな",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "写真",
    href: "/photos",
  },
  {
    title: "移動記",
    href: "/locations",
  },
  {
    title: "書いたもの・こと",
    href: "/articles",
  },
  {
    title: "つくばらーめん・飲食店情報",
    href: "/tsukuba-meshi",
  },
  {
    title: "/tanka",
    href: "/tanka",
  },
  {
    title: "ネレネー山脈",
    href: "/nerene",
  },
  {
    title: "日記",
    href: "/articles/diary",
  },
  {
    title: "授業感想",
    href: "/class-impression",
  },
  {
    title: "やること・やったこと",
    href: "/tasks",
  },
  {
    title: "KdB もどき関連リンク",
    href: "/kdb",
  },
];

const Header = () => {
  const [y, setY] = useState<number | null>(null);

  const hereHref = useMemo(() => {
    const candidates = items.filter((item) =>
      location.pathname.startsWith(item.href),
    );
    return candidates.reduce(
      (a, b) => (a.href.length > b.href.length ? a : b),
      { href: "" },
    ).href;
  }, []);

  return (
    <>
      <Wrapper width={y === null ? 0 : 300} onMouseLeave={() => setY(null)}>
        <Content>
          <CustomList>
            {items.map((item) => (
              <ListItem key={item.href}>
                {item.href === hereHref && <Point />}
                <Anchor href={item.href} dark={true}>
                  {item.title}
                </Anchor>
              </ListItem>
            ))}
          </CustomList>
        </Content>
        {y !== null && <Pointer y={y} />}
      </Wrapper>
      <Border
        onMouseMove={(e) => setY((prev) => (prev === null ? e.pageY : prev))}
      />
    </>
  );
};

export default Header;
