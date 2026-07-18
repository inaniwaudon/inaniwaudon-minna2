import styled from "@emotion/styled";
import { Fragment } from "react";

import PageWrapper from "@/components/common/PageWrapper";

import raw from "./optinion.txt?raw";

const title = "多事争論 2（ツー）";

const PageTitle = styled.h1`
  font-size: 1.2em;
  margin: 0 0 4px 0;
`;

const Description = styled.p`
  margin: 0 0 24px 0;
`;

const Main = styled.main`
  max-width: 800px;
  text-align: justify;
`;

const Article = styled.article`
  margin: 0 0 32px 0;
`;

const H2 = styled.h2`
  line-height: 1.6;
  font-size: 1em;
  margin: 24px 0 4px 0;
  display: inline;

  &:after {
    width: 1.5em;
    height: 1px;
    content: "";
    margin: 4px 8px;
    display: inline-block;
    background: #ccc;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin: 0 0 8px 0;
`;

type Block =
  | { type: "h2"; text: string }
  | { type: "blockquote"; lines: string[] }
  | { type: "paragraph"; lines: string[] };

type ContentBlock = Extract<Block, { type: "blockquote" | "paragraph" }>;

type Section = {
  heading: string | null;
  blocks: ContentBlock[];
};

const parseBlocks = (src: string): Block[] => {
  const lines = src.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
    } else if (line.startsWith("# ")) {
      blocks.push({ type: "h2", text: line.slice(2) });
      i++;
    } else {
      const paraLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("# ") &&
        !lines[i].startsWith("> ")
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: "paragraph", lines: paraLines });
    }
  }

  return blocks;
};

const groupSections = (blocks: Block[]): Section[] => {
  const sections: Section[] = [];
  let current: Section = { heading: null, blocks: [] };

  for (const block of blocks) {
    if (block.type === "h2") {
      if (current.heading !== null || current.blocks.length > 0) {
        sections.push(current);
      }
      current = { heading: block.text, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }
  if (current.heading !== null || current.blocks.length > 0) {
    sections.push(current);
  }

  return sections;
};

const sections = groupSections(parseBlocks(raw));

const Index = () => {
  return (
    <PageWrapper title={title} path="/articles">
      <Main>
        <PageTitle>{title}</PageTitle>
        <Description>
          某所に書いていた日記を転載（最終更新：2026/7/18）
        </Description>
        {sections.map((section, si) => (
          <Article key={si}>
            {section.blocks.map((block, bi) => {
              return (
                <Paragraph key={bi}>
                  {bi === 0 && section.heading && <H2>● {section.heading}</H2>}
                  {block.lines.map((line, j) => (
                    <Fragment key={j}>
                      {line}
                      {j < block.lines.length - 1 && <br />}
                    </Fragment>
                  ))}
                </Paragraph>
              );
            })}
          </Article>
        ))}
      </Main>
    </PageWrapper>
  );
};

export default Index;
