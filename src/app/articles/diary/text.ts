import text2023 from "./2023.txt?raw";
import text2024 from "./2024.txt?raw";

export const diaryItems = (() => {
  const items: {
    date: string;
    body: string;
    photo?: { src: string; alt: string };
  }[] = [];

  for (const text of [text2023, text2024]) {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    for (const line of lines) {
      if (line.match(/^\d{4}\/\d{1,2}/) || line.match(/^\d+ 月のふりかえり/)) {
        items.push({ date: line, body: "" });
      } else {
        if (line.startsWith("!")) {
          const splited = line.slice(1).split("|");
          items.at(-1)!.photo = { src: splited[0], alt: splited[1] ?? "" };
        } else {
          items.at(-1)!.body += line;
        }
      }
    }
  }
  return items;
})();
