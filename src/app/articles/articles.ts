export const articleTags = [
  "hongoshi",
  "tech",
  "design",
  "random",
  "speaking",
] as const;

export type ArticleTag = (typeof articleTags)[number];

export interface ArticleLink {
  href: string;
  title: string;
  date: string;
  description?: string;
  tags: ArticleTag[];
}

const articleHatenaLinks: ArticleLink[] = [
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20180321/1521620634",
    title: "3 日間。Python でつくる、Twitter カウントダウン Bot",
    date: "2018/03/21",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20190404/1554383981",
    title: "【WebAR】世界最速、AR で「令和」発表を再現（デモあり）",
    date: "2019/04/04",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20190511/1557550216",
    title: "Twitter を完璧に制限する「ダツイハイ」を開発しました",
    date: "2019/05/11",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20200309/1583739357",
    title:
      "英検パス単の音声データから単語と対訳を抜き出していい感じに加工するツールを作りました",
    date: "2020/03/09",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20200319/1584600532",
    title: "Chrome 拡張機能で Twitter に桜を降らせる",
    date: "2020/03/19",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20210322/1616418041",
    title:
      "容量無制限の YouTube に写真を保存して Google フォト代わりに使うソフトを作ったよ！！",
    date: "2021/03/22",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20211012/1633979685",
    title: "筑波大学 国際科学オリンピック特別入試体験記",
    date: "2021/10/12",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20211231/1640943650",
    title: "2021 年を振り返って",
    date: "2021/12/31",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20220525/1653446933",
    title: "日米友好祭 2022 に行ってきた",
    date: "2022/05/25",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20220919/1663521375",
    title: "はてなインターン 2022 に参加しました",
    date: "2022/09/19",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20221218/1671298432",
    title: "某某宿舎での一年",
    date: "2022/12/18",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20221231/1672497754",
    title: "2022 年を振り返って",
    date: "2022/12/31",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20230319/1679216111",
    title: "なぜ我々は筑波大を便利にすることができなかったのか？",
    date: "2023/03/19",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20230322/1679413012",
    title: "やはり俺の青春ラブコメはまちがっている。聖地巡礼記",
    date: "2023/03/22",
    tags: ["hongoshi", "random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20230411/1681167907",
    title: "3 度目の春が来る",
    date: "2023/04/11",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20230809/1691526678",
    title: "令和 5 年度版 おすすめエナジードリンク",
    date: "2023/08/10",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20231008/1696714736",
    title: "私から見たメ創",
    date: "2023/10/08",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20231018/1697617090",
    title: "ChatGPT キロロとの仮想対談",
    date: "2023/10/18",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20231109/1699528703",
    title: "学園祭で売上をリアルタイムに公開するサイトを雑に作ると盛り上がる",
    date: "2023/11/09",
    tags: ["tech"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20231207/1701875647",
    title: "GitHub Actions を回してピザを頼みたい",
    date: "2023/12/07",
    tags: ["tech", "hongoshi"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20231223/1703293729",
    title: "雙峰祭でそば焼いたらやきそばになってワロタ",
    date: "2023/12/23",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20231231/1704013026",
    title: "2023 年を振り返って",
    date: "2023/12/31",
    tags: ["random"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20240204/1707056780",
    title: "「安達としまむら」聖地巡礼記（岐阜編）",
    date: "2024/02/04",
    tags: ["random", "hongoshi"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20241007/1728301046",
    title:
      "スライドに適した「ニュートラルでデフォルト感のない」フォントを考える",
    date: "2024/10/07",
    tags: ["design"],
  },
  {
    href: "https://soudakyoto-ikou.hatenadiary.jp/entry/20241223/1734961667",
    title: "独自のプレゼンツールと卒論の進捗を共有する仕組みを作った",
    date: "2024/12/23",
    tags: ["tech"],
  },
];

const articleZennLinks: ArticleLink[] = [
  {
    href: "https://zenn.dev/inaniwaudon/articles/039e82d61254ed",
    title: "ヒラギノ角ゴシックの CMap を読む",
    date: "2022/01/22",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/832ecf5180d527",
    title:
      "忙しい人のための CFF テーブル入門: PDF にOpenTypeフォントのサブセットを埋め込むには",
    date: "2022/01/26",
    tags: ["hongoshi", "tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/9cc5fcd5a08530",
    title: "Next.js でクライアントでのみコードを実行したい",
    date: "2022/05/16",
    tags: ["tech"],
  },
  {
    href: "https://qiita.com/inaniwaudon/items/46ac7ece438febde1538",
    title: "styled-componentsで隣接セレクタを使用する",
    date: "2022/07/10",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/a80f7dc66ffe92",
    title: "Web だって組版の夢を見る――新聞のように自在にテキストを流し込むには",
    date: "2022/07/26",
    tags: ["hongoshi", "tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/e7c11633685cf5",
    title:
      "Illustrator 上でルビを振るスクリプト illustrator-ruby を公開しました",
    date: "2022/08/17",
    tags: ["hongoshi", "tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/62dfe3923f8521",
    title: "styled-components で CSS Animation を再度実行する",
    date: "2022/10/03",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/a18ee47ce1488a",
    title: "Type 2 Charstring を読み解いて OpenType フォントを描画してみる",
    date: "2022/11/16",
    tags: ["hongoshi", "tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/e4d6d326c4c18b",
    title: "筑波大学学園祭 Web サイト構築の舞台裏",
    date: "2022/12/15",
    tags: ["hongoshi", "tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/12fc531cb89813",
    title: "プログラミング初学者の大学生が動かないコードを動かすには？",
    date: "2022/12/25",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/e01d84841aafe7",
    title: "年賀状の宛名をサクッと作るためのツールを公開しました",
    date: "2022/12/28",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/b361c4f996c980",
    title:
      "Twitter 上のイラストを快適に閲覧するための Web アプリを公開しました",
    date: "2023/01/22",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/df0b0959d61b23",
    title: "hyperref パッケージは PDF の注釈機能を用いて実現されている",
    date: "2023/02/16",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/8ce67c38ed3624",
    title: "郷に入れば郷に従って npm/yarn を切り替えるスクリプト",
    date: "2023/02/21",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/a796af99ab834f",
    title: "input 要素に flex-shrink が効かないときの対処法",
    date: "2023/02/27",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/0ccec9aab37032",
    title: "Intl.segmenter + React で改行位置の制御",
    date: "2023/04/30",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/7fa50a744cb67a",
    title: "Cloudflare Workers + KV で OAuth2.0 クライアント",
    date: "2023/07/15",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/2ce2643abc9e08",
    title: "スラッシュコマンドでぬいぐるみとおしゃべりする Discord Bot",
    date: "2023/08/08",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/2d0222ac183b86",
    title: "Server Components で複数選択できるフィルタリングを実装する",
    date: "2023/11/19",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/2c01b38eb447b9",
    title: "ベジェ曲線のオフセットを計算する",
    date: "2023/12/12",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/09f20fbec91f27",
    title:
      "GitHub Actions から PR を自動で作成してテストが通ったらマージしたい",
    date: "2024/01/15",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/40858ff736ba97",
    title: "組版システムの品質を保証する自動テスト",
    date: "2024/02/18",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/3ff8761773178c",
    title: "Chrome で text-spacing-trim プロパティがサポートされたぞ！！",
    date: "2024/03/24",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/08bd891f106177",
    title:
      "Cloudflare Workers に Google Apps Script を挟んで処理に時間の掛かる Discord Bot を作る",
    date: "2024/04/29",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/5e56e701fc7a41",
    title: "macOS のファイルを断捨離して 60 GB 空ける",
    date: "2024/06/23",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/61d2b3632a3325",
    title: "Tkinter でルビを表示する",
    date: "2024/06/30",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/2cdf852fa10442",
    title: "Web で TikTok やショート動画のような縦スワイプ UI を実装する",
    date: "2024/07/19",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/c115a36f810eda",
    title: "Hono + Cloudflare Workers でパスキーを試してみる",
    date: "2024/09/18",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/5d040f543c4c69",
    title: "TypeScript でプログラマブルに動く日本語組版処理システムの提案",
    date: "2024/12/02",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/a7e4577fbe389f",
    title:
      "Cloudflare Workers 経由でオブジェクトストレージ代わりにGoogle ドライブを使う",
    date: "2024/12/03",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/37be5301f93791",
    title: "Apple Watch—Mac 間で Bluetooth Low Energy（BLE）",
    date: "2025/04/28",
    tags: ["tech"],
  },
  {
    href: "https://zenn.dev/inaniwaudon/articles/59ea8b09208c29",
    title: "DTP は MCP の夢を見るか？ LLM で Illustrator の作業効率化を試みる",
    date: "2025/05/11",
    tags: ["tech", "design", "hongoshi"],
  },
];

const articleNoteLinks: ArticleLink[] = [
  {
    href: "https://note.com/soudakyoto_ikou/n/n6967b2471eca",
    title:
      "サイエンスフロンティア高校のポスターに学ぶ！グラフィックデザイン基本の「き」",
    date: "2019/06/02",
    tags: ["hongoshi", "design"],
  },
  {
    href: "https://note.com/soudakyoto_ikou/n/nd63330df85d8",
    title:
      "まんがタイムきららの「写植」を読む――吹き出しにみる漫画書体の使い分け",
    date: "2023/01/29",
    tags: ["hongoshi", "design"],
  },
];

const articleWordLinks: ArticleLink[] = [
  {
    href: "/docs/word-kumihan.pdf",
    title: "書いてみよう！組版処理系",
    date: "2021/09/12",
    description: "WORD 50号",
    tags: ["tech"],
  },
  {
    href: "/docs/word-takutsu.pdf",
    title: "宅通......本当にするのですか？",
    date: "2022/02/26",
    description: "WORD 引っ越し準備号 2022",
    tags: ["random"],
  },
  {
    href: "/docs/word-adobe.pdf",
    title: "あの日見た Adobe CC の名前を僕達はまだ知らない。",
    date: "2022/03",
    description: "WORD 入学祝い号 2023",
    tags: ["random"],
  },
  {
    href: "/docs/word-energy.pdf",
    title: "令和4年度版 おすすめエナドリ 10 選",
    date: "2022/08/11",
    description: "WORD 52号",
    tags: ["random"],
  },
  {
    href: "/docs/word-clreq.pdf",
    title: "やはり俺の中国語組版はまちがっている",
    date: "2023/07/07",
    description: "WORD 53号",
    tags: ["hongoshi", "tech"],
  },
  {
    href: "/docs/word-kakuteishinkoku.pdf",
    title: "確定申告バトル 2024",
    date: "2024/04/09",
    description: "WORD 入学祝い号 2024",
    tags: ["random", "hongoshi"],
  },
];

const articleOthersLinks: ArticleLink[] = [
  {
    href: "https://speakerdeck.com/inaniwaudon/qiang-li-nagurahuitukuji-neng-wobei-etazu-ban-chu-li-sisutemutwightfalsekai-fa",
    title: "強力なグラフィック機能を備えた組版処理システム Twight の開発",
    date: "2021/04/10",
    description: "CSS組版 Vivliostyle ユーザーと開発者の集い 2021春",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://speakerdeck.com/inaniwaudon/kdbmodoki-falsekai-fa-toyun-yong",
    title: "授業科目 DB 代替システム「KdB もどき」の開発と運用",
    date: "2021/12/15",
    description: "大学 ICT 推進協議会 2021 年度 年次大会",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://speakerdeck.com/inaniwaudon/puroguramingunihong-retemiyou",
    title: "プログラミングに触れてみよう！！",
    date: "2023/01/23",
    description: "文京区立昭和小学校",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://www.iplab.cs.tsukuba.ac.jp/paper/poster/wada_interaction2023.pdf",
    title:
      "グリッドレイアウトに基づく組版作業を支援する手書きストロークを入力としたインタフェース",
    date: "2023/03/01",
    description: "インタラクション 2023",
    tags: ["tech"],
  },
  {
    href: "/articles/max",
    title: "マックスコーヒーのパッケージ観察",
    date: "2023/05/14",
    description: "いなにわうどん.みんな",
    tags: ["hongoshi", "design"],
  },
  {
    href: "https://speakerdeck.com/inaniwaudon/until-0601-2",
    title: "Web フロントエンドと複雑 GUI の実装",
    date: "2023/06/01",
    description: "UNTIL.LT #0x02",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://speakerdeck.com/inaniwaudon/wip-github-actions-wo-hui-sitehisawolai-mitai",
    title: "[WIP] GitHub Actions を回してピザを頼みたい",
    date: "2023/12/03",
    description: "UNTIL.LT #0x03",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://speakerdeck.com/inaniwaudon/ltknwlwjy-wr-llg-at-lrby-at",
    title: "التكنولوجيا_وراء_اللغة_العربية",
    date: "2024/05/11",
    description: "UNTIL.LT #0x04",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://www.iplab.cs.tsukuba.ac.jp/~wada/mast2024.pdf",
    title: "メ創ってどんなとこ！？ 在学生体験談 LT",
    date: "2024/07/28",
    description: "筑波大学情報メディア創成学類 夏の大学説明会",
    tags: ["random", "speaking"],
  },
  {
    href: "https://www.wiss.org/WISS2024Proceedings/data/paper/10.pdf",
    title: "母音，子音の順に選択を行う間接タッチ用かな文字入力手法",
    date: "2024/12/12",
    description: "WISS 2024",
    tags: ["tech"],
  },
  {
    href: "/articles/2024",
    title: "2024 年を振り返って",
    date: "2024/12/31",
    description: "いなにわうどん.みんな",
    tags: ["random"],
  },
  {
    href: "https://slide.yokohama.dev/rubic-interface",
    title: "ルービックキューブ型インタフェース",
    date: "2025/05/18",
    description: "UNTIL.LT #0x07",
    tags: ["tech", "speaking"],
  },
  {
    href: "https://slide.yokohama.dev/dtp-mcp",
    title: "DTP は MCP の夢を見るか？ LLM で Illustrator の作業効率化を試みる",
    date: "2025/05/25",
    description: "アドビアプリ自動化もくもく会 #3",
    tags: ["tech", "design", "speaking"],
  },
];

export const articleLinks = (() => {
  const hatena = articleHatenaLinks.map((link) => ({
    ...link,
    description: "はてなブログ",
  }));
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: "note",
  }));
  const zenn = articleZennLinks.map((link) => ({
    ...link,
    description: "Zenn",
  }));
  return [
    ...hatena,
    ...note,
    ...zenn,
    ...articleWordLinks,
    ...articleOthersLinks,
  ].sort((a, b) => (a.date === b.date ? 0 : a.date < b.date ? 1 : -1));
})();
