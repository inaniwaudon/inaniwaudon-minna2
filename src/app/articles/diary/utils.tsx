import styled from "@emotion/styled";
import text2023 from "./2023.txt?raw";
import text2024 from "./2024.txt?raw";
import text2025 from "./2025.txt?raw";
import text2026 from "./2026.txt?raw";

export const Paragraph = styled.p`
  margin: 0 0 12px 0;
`;

export const DiaryList = styled.ul`
  margin: 0 0 12px 0;
  padding-left: 1.5em;
`;

export const PhotoWrapper = styled.a`
  width: 100%;
  height: 20px;
  margin: 0 0 12px 0;
  border-radius: 4px;
  overflow: hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  width: 100%;
  opacity: 0.6;
  transition: transform 0.2s ease-out, opacity 0.2s;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export interface DiaryItem {
  date: string;
  body: string;
  photo?: { src: string; alt: string };
}

const parseText = (text: string): DiaryItem[] => {
  const items: DiaryItem[] = [];
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const line of lines) {
    if (line.match(/^\d{4}\/\d{1,2}/) || line.match(/^.+のふりかえり$/)) {
      items.push({ date: line, body: "" });
    } else if (line.startsWith("!")) {
      const splited = line.slice(1).split("|");
      items.at(-1)!.photo = { src: splited[0], alt: splited[1] ?? "" };
    } else {
      const current = items.at(-1)!;
      current.body = current.body ? `${current.body}\n${line}` : line;
    }
  }
  return items;
};

export const diaryItemsByYear = {
  2023: parseText(text2023),
  2024: parseText(text2024),
  2025: parseText(text2025),
  2026: parseText(text2026),
};

export const diaryItems = [
  ...diaryItemsByYear[2023],
  ...diaryItemsByYear[2024],
  ...diaryItemsByYear[2025],
  ...diaryItemsByYear[2026],
];

export const renderBody = (body: string) => {
  const lines = body.split("\n");
  const nodes: React.ReactNode[] = [];
  let textLines: string[] = [];
  let listItems: string[] = [];

  const flushText = () => {
    if (textLines.length > 0) {
      nodes.push(<Paragraph key={nodes.length}>{textLines.join("")}</Paragraph>);
      textLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push(
        <DiaryList key={nodes.length}>
          {listItems.map((item, i) => <li key={i}>{item}</li>)}
        </DiaryList>
      );
      listItems = [];
    }
  };

  for (const line of lines) {
    // ・で始まる行をリストにする
    if (line.startsWith("・")) {
      flushText();
      listItems.push(line.slice(1));
    } else {
      flushList();
      textLines.push(line);
    }
  }
  flushText();
  flushList();

  return <>{nodes}</>;
};
