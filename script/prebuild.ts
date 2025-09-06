import fs from "node:fs";
import path from "node:path";

const cmsUrl = "https://cms.yokohama.dev";

const fetchData = async <T>(path: string) => {
  const url = new URL(`/api/files/web/${path}`, cmsUrl);
  const response = await fetch(url, {
    headers: {
      Authorization: process.env.CMSR2_TOKEN!,
    },
  });
  if (path.endsWith(".json")) {
    return (await response.json()) as T;
  }
  return (await response.text()) as T;
};

const classImpression = async () => {
  const fetchedDir = "./src/app/class-impression/fetched";
  if (!fs.existsSync(fetchedDir)) {
    fs.mkdirSync(fetchedDir);
  }

  // JSON ファイルを取得
  const json = await fetchData<
    { year: number; term: string; description: string }[]
  >("class-impression/index.json");
  fs.writeFileSync(path.join(fetchedDir, "index.json"), JSON.stringify(json));

  for (const item of json) {
    // Markdown ファイルを取得
    const md = await fetchData<string>(
      `class-impression/${item.year}-${item.term}.md`,
    );
    fs.writeFileSync(path.join(fetchedDir, `${item.year}-${item.term}.md`), md);
  }
};

export const main = async () => {
  classImpression();
};

main();
