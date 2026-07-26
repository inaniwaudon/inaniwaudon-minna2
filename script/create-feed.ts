import fs from "node:fs";
import { Feed, type FeedOptions } from "feed";

import { articleLinks } from "../src/app/articles/articles";

const baseUrl = "https://いなにわうどん.みんな";
const directory = "feed";
const path = "public/feed";

export const feedOptions: FeedOptions = {
  title: "いなにわうどん.みんな",
  description: "書いたもの・こと",
  id: baseUrl,
  link: baseUrl,
  feedLinks: {
    atom: `${baseUrl}/${directory}/atom.xml`,
    rss2: `${baseUrl}/${directory}/feed.xml`,
    json: `${baseUrl}/${directory}/feed.json`,
  },
  copyright: "(c) いなにわうどん",
  language: "ja",
  author: {
    name: "いなにわうどん",
    link: baseUrl,
    email: "me@yokohama.dev",
  },
};

export const main = () => {
  const feed = new Feed(feedOptions);

  for (const link of articleLinks) {
    const href = link.href.startsWith("/")
      ? `${baseUrl}${link.href}`
      : link.href;
    feed.addItem({
      title: link.title,
      description: "",
      date: new Date(link.date),
      id: href,
      link: href,
    });
  }

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  fs.writeFileSync(`${path}/feed.xml`, feed.rss2());
  fs.writeFileSync(`${path}/atom.xml`, feed.atom1());
  fs.writeFileSync(`${path}/feed.json`, feed.json1());
};

main();
