import styled from "@emotion/styled";

import Anchor from "@/components/common/Anchor";
import H2 from "@/components/common/H2";
import H3Inner from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";

import adashima from "@/assets/2024/adashima.webp";
import baqet from "@/assets/2024/baqet.webp";
import c105 from "@/assets/2024/c105.webp";
import contribution from "@/assets/2024/contribution.webp";
import daigen from "@/assets/2024/daigen.webp";
import gifu from "@/assets/2024/gifu.webp";
import hibike from "@/assets/2024/hibike.webp";
import kiroro from "@/assets/2024/kiroro.webp";
import kokusai from "@/assets/2024/kokusai.webp";
import kusudama from "@/assets/2024/kusudama.webp";
import nw from "@/assets/2024/nw.webp";
import saitaku from "@/assets/2024/saitaku.webp";
import sanriku from "@/assets/2024/sanriku.webp";
import sb from "@/assets/2024/sb.webp";
import sohosaiFireworks from "@/assets/2024/sohosai-fireworks.webp";
import sohosai from "@/assets/2024/sohosai.webp";
import sohosai2000 from "@/assets/2024/sohosai2000.webp";
import sorimachi from "@/assets/2024/sorimachi.webp";
import takao from "@/assets/2024/takao.webp";
import takayama from "@/assets/2024/takayama.webp";
import tarumi from "@/assets/2024/tarumi.webp";
import tontokoton from "@/assets/2024/tontokoton.webp";
import yonomori from "@/assets/2024/yonomori.webp";

const title = "2024 年を振り返って";

const Main = styled.main`
  max-width: 800px;
  text-align: justify;
`;

const H4 = styled.h4`
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  line-height: 1.7;
`;

const Ul = styled.ul`
  line-height: 1.7;
`;

const Figure = styled.figure`
  width: 100%;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .imgbox {
    max-width: 100%;
    display: flex;
    gap: 16px;
    overflow-x: scroll;
  }

  img {
    max-width: 90%;
    max-height: 300px;
    margin: auto;
    display: block;
  }

  figcaption {
    color: #666;
    text-align: center;
    margin-top: 16px;
  }
`;

const FnAnchor = styled.a`
  color: #39c;
  text-decoration: none;
  margin: 0 2px;
`;

const Blockquote = styled.blockquote`
  line-height: 1.7;
  color: #39c;
  border-left: solid 1px #39c;
  margin: 0;
  padding: 4px 0 4px 24px;
`;

const Footnotes = styled.ul`
  color: #666;
  font-size: 14px;
  margin-top: 24px;
  padding: 16px 0 0 0;
  border-top: solid 1px #ddd;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    display: flex;
  }

  a {
    width: 32px;
    color: #39c;
    text-decoration: none;
    flex: 32px 0 0;
    display: block;
  }
`;

const H3 = ({ children }: { children: React.ReactNode }) => {
  return <H3Inner style={{ marginTop: "24px" }}>{children}</H3Inner>;
};

const p = (
  literals: TemplateStringsArray,
  ...placeholders: React.ReactNode[]
) => {
  return (
    <Paragraph>
      {literals.reduce<React.ReactNode[]>((result, literal, i) => {
        const lines = literal.split("\n");
        const literal0 = lines
          .map((line, i) =>
            lines.length === 1
              ? line
              : i === 0
                ? line.trimEnd()
                : i === lines.length - 1
                  ? line.trimStart()
                  : line.trim(),
          )
          .join("");
        const placeholder =
          placeholders[i] !== undefined ? placeholders[i] : "";
        return [result, literal0, placeholder];
      }, [])}
    </Paragraph>
  );
};

const footnotes = [
  [
    "hatena",
    "昨年までははてなブログに投稿していたのですが、今年は試験的に個人サイト上に書いてみることにしました。",
  ],
  ["taiwan", "台灣啤酒が安かったので無限にビールを飲んでいた"],
  [
    "wanko",
    "友人がわんこそばを食べていて飲み会みたいで面白かった（無限にわんこそばを勧められ、わんこそばを沢山食べる人が偉い）",
  ],
  ["ogori", "驕り"],
  [
    "others",
    "実験計画、統計解析、倫理申請、論文構成など。研究員の方が指導してくれて本当に助かりました",
  ],
  ["naeba", "苗場プリンスホテルで、ご飯が美味しかった"],
  ["sonobun", "その分いまは若干楽かもしれない"],
  ["intern", "しかもインターンが重なって本当に死だった……"],
  ["drink", "深夜に一人で無限に飲酒していた"],
  ["itc", "厳密に言えば 1 科目取っていたが、耐え切れずに履修を切った"],
  [
    "sohosai",
    "ただでさえ卒研で忙しい中、準備が大変な雙峰祭に出すかは迷ったものの、まあ研究だけして過ごすのもなと思ったので出した。実際半年ぶりに会えた人とかもいたのでやって良かったです",
  ],
  ["jsys", "筑波大学学園祭実行委員会 情報メディアシステム局"],
  [
    "passion",
    "学園祭などを見ていると、金銭や利害関係が介在せずにすべてが人々の熱意だけで動いている光景に胸を打たれることがある",
  ],
  ["swift", "guard let とかも結構好きな構文です。Xcode がもっと良ければ……"],
  [
    "contribution",
    "この記事をアップするために 1 PR 必要なので contribution 数がマッチしなくなるバグがある",
  ],
  ["herb", "脱法ハーブ"],
  ["gyomu", "業務委託に勤続という概念が適用されるかは不明"],
  [
    "swarm",
    "例えば、Swarm もどきの移動記録ツールなんかは旅行のときに活用しています",
  ],
  ["spring", "春期試験は受かるという謎のジンクスができつつある"],
  ["manner", "マナーを守ってたのしく飲酒"],
  [
    "kyusoku",
    "研究室は規模がそこそこ大きく（学生だけで 40 人程度）、飲み会や交流の機会も他研究室と比べて多いと思います。経験則として親密さは関わった時間に比例する傾向にあり、その点で同期とは比較的急速に仲良くなれたのでは？と感じています",
  ],
  [
    "talk",
    "人間と話すことは特効薬ではないせよ、延命には最適だと考え始めています",
  ],
  [
    "kenko",
    "最近になり、少しずつ健康を意識し始めています（あすけんは続かなかったけど）。カット野菜を定期的に食べているほか、外食もらーめん一辺倒から、中華や定食が増えてきたように思えます",
  ],
  ["out", "友人も同じことを言っていた"],
  [
    "shinjin",
    "新人ゼミ（英語輪講）が午前にあったのでその終わりに毎回食堂に行っていた",
  ],
  [
    "midnight",
    "深夜まで作業をしていると（特に 23 時を過ぎると）空いてるお店が松屋、清六家、松のや（現在は閉店時刻が繰り上がって 23 時閉店）、ジョイフル程度しか存在せず、そうした中で盛清六は希望の星でした",
  ],
  ["dailyreport", "アクティブユーザ 3 人。特に相手の日報には干渉しない"],
  [
    "ci",
    "このあたりも CI 等を走らせてよしなにやっていきたい気持ちはあるのですが、一方で public にする前にはチェックを通したいという気持ちもあり……",
  ],
  [
    "punc",
    "エイリアスを登録しているので、シェル上で punc と打つと句読点を切り替えられるようになっている",
  ],
  [
    "googlephoto",
    "旅行に行った際には撮った写真を Google フォトに共有するのが社会性ムーブっぽい",
  ],
  ["sorimachi", "反町の森公園、今年初めて訪れたわりによく行った公園"],
  ["makeine", "なぜか負けインと呼んでいない"],
  ["shika", "しかのこ……"],
  [
    "shousou",
    "昨年のエントリに書いた、学生としての身分が終わることに対する焦燥は大分収まったと思います。日々に忙殺されているくらいのほうが深く人生を考えなくて良い",
  ],
  ["life", "周囲で結婚（あるいは孤独死）を意識する人間が増えた、ヤバすぎる"],
];

const fn = (key: string) => {
  const i = footnotes.findIndex((f) => f[0] === key) + 1;
  if (i === 0) {
    return <></>;
  }
  return (
    <FnAnchor href={`#footnote${i}`} id={`fn${i}`}>
      <sup>[{i}]</sup>
    </FnAnchor>
  );
};

const Index = () => {
  return (
    <PageWrapper title={title} path="/articles">
      <Main>
        <PageTitle>{title}</PageTitle>
        <p>2024/12/31</p>
        {p`年の瀬ですね。
          今年も忘年会とコミックマーケットが連続する非常に良い年末を過ごしていました。
          昨年の大晦日は寒空の中、冬コミの待機列で振り返り記事を書いていましたが、
          今年は冬コミが大晦日を外れたことから、家でぬくぬくと惰眠を貪りながら過ごしています。
          卒研がなければなお良い年末だったのですが……`}
        {p`――2024 年が終わります。
          大晦日は一年の振り返り記事を書くのが恒例になっているので、
          ${<Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20231231/1704013026">昨年同様</Anchor>} に
          本エントリ${fn("hatena")}をお送りしたいと思います。
          今年は研究、外食、旅行が生活の中心にあったため、そのあたりを中心に書いていきます。`}
        <H2>移動</H2>
        {p`今年の長距離移動は以下の通りでした。
          友人と旅行に行ったり、あるいは一人旅行に行ったりする機会も結構ありました。
          日数を数えると累計で一月以上に及びます。旅行と飲酒はすればするほどよいです。`}
        <Ul>
          <li>1 月上旬：山口、大阪（帰省 ／ 5 日間）</li>
          <li>
            1 月下旬：<Anchor href="/locations/2024nagoya">岐阜、名古屋</Anchor>
            （3 日間）
          </li>
          <li>
            2 月下旬：<Anchor href="/locations/2024taiwan">台湾</Anchor>
            （台北、高雄 ／ 6日間）
          </li>
          <li>3 月上旬：房総半島（研究室合宿 ／ 2 日間）</li>
          <li>3 月中旬：下呂（3 日間）</li>
          <li>3 月下旬：いわき（2 日間）</li>
          <li>4 月下旬：宇都宮（日帰り）</li>
          <li>5 月上旬：身延（日帰り）</li>
          <li>
            6 月上旬：大阪、<Anchor href="/locations/2024kyoto">京都</Anchor>
            （法事 + 旅行 ／ 5 日間）
          </li>
          <li>7 月下旬：銚子（日帰り）</li>
          <li>9 月上旬：小山、那須塩原（日帰り）</li>
          <li>9 月中旬：諏訪、松本（3 日間）</li>
          <li>
            9 月下旬：<Anchor href="/locations/2024sanriku">東北</Anchor>
            （盛岡、三陸、仙台 ／ 4 日間）
          </li>
          <li>9 月下旬：浜松（日帰り）</li>
          <li>
            11 月中旬：
            <Anchor href="/locations/2024toyohashi">豊橋、高山</Anchor>（3
            日間）
          </li>
          <li>12 月上旬：苗場（WISS 2024 ／ 3 日間）</li>
        </Ul>
        {p`恒例の学類同期との旅行では台湾に行きました。
          5 年ぶりかつコロナ禍明け初・海外ということでテンション爆上げでした。
          台湾は異国情緒を醸し出しつつも（特に高雄の沿岸部が良かった）、距離的にも心理的／文化的にも日本に近く、
          それほど気を張ることなく行けた点がポイント高かったです${fn("taiwan")}。
          春先にいわきを訪れた際には、双葉／夜ノ森駅周辺を併せて散策しました。
          震災から 12 年を経た今でも、時間の停滞を実感させられたことを憶えています。
          東北地方でいえば、初めて三陸の地に足を踏み入れました。
          三陸旅行中の大半はあいにくの雨模様だったのですが、
          幸運にも宮古の海岸付近は快晴で、限りなく透明に近い、澄んだ海が印象的でした${fn("wanko")}。`}
        <Figure>
          <div className="imgbox">
            <img
              src={takao}
              alt="ライトレールの駅で、相対式ホームがある。緑色の芝の上にレールがある"
            />
            <img src={yonomori} alt="カーブする道路。光が差し込む" />
            <img src={sanriku} alt="青い空と青い海" />
          </div>
          <figcaption>
            高雄ライトレール（台湾・高雄市）、夜ノ森（福島県双葉郡）、浄土ヶ浜（宮城県宮古市）
          </figcaption>
        </Figure>
        {p`その他に、今まで未踏の地であった岐阜県を 3 度訪れ、
          また名古屋に 10 年ぶりに降り立つなど、中部地方の開拓が進んだ一年でもありました。
          高山の町並み、素晴らしかった……`}
        <Figure>
          <div className="imgbox">
            <img src={tarumi} alt="1両の赤色の電車が停車するホーム" />
            <img
              src={gifu}
              alt="高層階から見た夜景。木々がイルミネーションでで照らさされている"
            />
            <img src={takayama} alt="古い町並みの中に通る川。橋が見える" />
          </div>
          <figcaption>
            樽見鉄道（岐阜県大垣市）、岐阜（岐阜県岐阜市）、高山（岐阜県高山市）
          </figcaption>
        </Figure>
        {p`来年は卒業旅行で沖縄と鹿児島に行きます！！ どちらも初めて行くので激アツです。`}
        <H2>大学</H2>
        {p`授業中心から研究室中心の生活へと移行しました。
          無限に大学にいた気がします。`}
        <H3>研究</H3>
        {p`HCI（ヒューマンコンピュータインタラクション）系の研究室に配属され、文字入力手法の研究をしていました。
          今年度はほとんど授業がなかったので、手の空いた時間は研究室に滞在することが多かったです。
          ゼミの頻度は週 2 回 + 英語輪講（10 月まで）といった感じでした。`}
        {p`研究に関しては、実装早いし余裕かと思っていた${fn("ogori")} のですが、
          実装以外の部分で考えること${fn("others")} が予想以上に多く、正直疲弊した感覚は拭えませんでした。
          やはり、1 サイクル（発案に始まり実装、実験、統計解析、執筆まで）回すのに半年以上は掛かるなというのが取り組んでみた所感です。
          とはいえ、研究は苦しくもそれなりに面白いので、来年は国際学会か論文誌を目指していきたいと思います。`}
        <Figure>
          <div className="imgbox">
            <img src={sb} alt="" />
          </div>
          <figcaption>無限に幽閉されている総合研究棟 B</figcaption>
        </Figure>
        <H4>学会と研究室の一年</H4>
        {p`${<Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20241223/1734961667">先日のエントリ</Anchor>} にも少し書いたのですが、
          ${<Anchor href="https://www.wiss.org/WISS2024/">WISS</Anchor>} という国内会議に参加しました。
          苗場${fn("naeba")}の山奥に 2 泊 3 日泊まり込みです。
          同期が来てくれたので、基本的に一緒に行動していました。
          昼は発表、夜は懇親会と過密スケジュールだったのですが、とても興味深く、またたのしい経験となりました。`}
        {p`新年度、研究室に席を得たところで、ひとまず査読付きの国内会議を目指していこうとなり、
          8 月末締切の WISS 登壇発表に投稿することになりました。
          7–8月は実験／解析／執筆と目の回る忙しさ${fn("sonobun")} で、最終日の 22 時まで掛けてなんとか投稿しました。
          そんなわけで 8 月末${fn("intern")}は本当に苦しかった${fn("drink")}のですが、
          投稿／採択後に飲んだ酒が死ぬほど美味かったので、まあすべてが帳消しになったかなと思います。`}
        <Figure>
          <div className="imgbox">
            <img src={daigen} alt="もつ味噌ラーメンを食べる様子" />
            <img
              src={saitaku}
              alt="「採択」と乱暴な字で書かれたホワイトボード"
            />
          </div>
          <figcaption>記憶にない写真が写真フォルダに多数</figcaption>
        </Figure>
        <H4>院試</H4>
        {p`無事に合格しました！ 来年からは ${<Anchor href="https://www.cs.tsukuba.ac.jp/">システム情報工学研究群 情報理工学位プログラム</Anchor>} に進学します。
          研究室は HCI ですが、分野自体は CS です。
          修士（工学）取っていくぞ…… 受験した研究室同期／知り合いも基本的に全員受かったので、大変めでたい話です。`}
        {p`推薦入試だったため、選考は 10 分程度の面接一本でした。
          大学に続き大学院まで筆記試験なしで入ってしまった…… というわけで試験自体は簡単だったのですが、
          一般よりも出願が早い（6月上旬）ため、研究テーマを早急に決める必要があった点は大変でした。`}
        <Figure>
          <div className="imgbox">
            <img src={tontokoton} alt="とんかつ" />
            <img
              src={kusudama}
              alt="「祝 おめでとう」と書かれたくす玉が飾られた研究室"
            />
          </div>
          <figcaption>受験前に食べたとんかつ ／ お祝いのくす玉</figcaption>
        </Figure>
        <H3>授業</H3>
        {p`学部の授業は（卒業研究以外）取り切ってしまったため、早期履修で大学院の授業を取っていました。
          頻度に関しては春学期が週数コマ程度、秋学期は 0${fn("itc")} でした。
          個人的にアツかった講義は ${<Anchor href="https://kdb.tsukuba.ac.jp/syllabi/2024/0AL5444/jpn">情報理工特別講義 I</Anchor>} です。
          Kotlin に触りつつ、読みやすく保守性に優れたコードを書くためのプラクティスを 2 日間の集中講義として説くという内容で、
          実践的かつ CS っぽい授業としてかなり面白かったです。`}
        <H3>雙峰祭、学生団体</H3>
        {p`今年も ${<Anchor href="https://kyogaku.yokohama.dev">雙峰祭に出店</Anchor>}${fn("sohosai")}しました。
          やきそばを焼くのはあまりに労力が大きいので、今年は手間の少ないフランクフルトを選び、1 本 100 円で売っていました。
          100 円のインパクトは大きく、会場の隅に配置されたにも関わらず列の絶えない大盛況ぶりでした。`}
        {p`一方、jsys${fn("jsys")} に関しては、昨年はちょこっと手伝ったりもしたのですが、
          今年は特に関わりはなかったです（たまに飲みに行ったりはしますが）。
          後輩達が頑張っていて凄いな${fn("passion")} と思いました。
          全代会もプログラミング研修会をした以外はほぼノータッチでした。
          個人的な感覚としては、4 年以降は学生団体やサークルからは退くべきなのかなと思っています。`}
        <Figure>
          <div className="imgbox">
            <img
              src={sohosai2000}
              alt="「2000」と象られたバルーンが飾られたテント"
            />
            <img
              src={sohosai}
              alt="学内の様子。来場者と案内所のオレンジ色のテントが写る。"
            />
            <img src={sohosaiFireworks} alt="空に打ち上がる黄色、赤色の花火" />
          </div>
          <figcaption>
            2,000 本の売上に対して利益はわずか 4
            万円程度だった。来年は驚額の殿堂（上振れ）を出してボロ儲けし、その利益で毎週ジンギスカンを食べようと決意で満たされた瞬間だった
          </figcaption>
        </Figure>
        <H2>開発</H2>
        {p`主に趣味として TypeScript, React を、労働では Vue.js, Python を書いていました。
          また研究で macOS／watchOS（Apple Watch）用アプリケーションを書く必要が生じたため、Swift に入信しました${fn("swift")}。
          SwiftUI は宣言的で結構書きやすいです。`}
        {p`GitHub の年間 contribution 数は 1,740 でした${fn("contribution")}。
          一日一回 PR を自動レビューする CI が作動するため草の見た目自体はかさ増しされている${fn("herb")} のですが、
          実際のコミット数としては昨年よりかなり減っています。
          個人開発が減ったことに加え、研究が実装よりも評価メインの分野に来てしまったことが影響しているのだと考えられます。
          来年はもう少し実装面に注力していきたいところです。`}
        <Figure>
          <div className="imgbox">
            <img
              src={contribution}
              alt="1,740 contributions in the last year"
            />
          </div>
          <figcaption>稀に CI が落ちている</figcaption>
        </Figure>
        <H3>労働</H3>
        {p`昨年に引き続き、あるスタートアップで Web や組版のシステムを実装しています。
          年末で勤続${fn("gyomu")} 3 年半を迎え、今年からは稼働も週 3 に増えました（ありがとうございます）。
          来年以降はぜひ具体的に表に出す取り組み（学会発表等）にも挑戦していきたいです。
          加えて、夏季の短期インターンとして日本経済新聞社に行きました。
          内容自体はハッカソン的なもので、新聞社のオフィスってこんな雰囲気なのかーと大変勉強になりました。`}
        <H3>個人開発</H3>
        {p`研究と労働にリソースが割かれ、趣味開発にはほとんど手が回りませんでした。
          そんな中でも、個人サイトには少しずつ手を加えています${fn("swarm")}。
          目下の目標としては、趣味開発では自分が使うものをコツコツ作って行くことを目指しています。
          また、${<Anchor href="https://zenn.dev/inaniwaudon/articles/5d040f543c4c69">TypeScript をベースとした組版システム</Anchor>} は
          個人的に結構筋が良いのでは？と思っているので、空き時間を見つけて少しずつ開発を続けていきます。`}
        <H3>資格</H3>
        {p`春期で受験したネットワークスペシャリスト試験に合格しました！！ まさか通るとは
          （しかも DB より先に）とは思っておらず、完全な記念受験だったため驚きを隠し切れません${fn("spring")}。
          DB は落ちました（3 度目……）。捲土重来で来年またリベンジしていきます。`}
        <Figure>
          <div className="imgbox">
            <img src={kokusai} alt="夕日に照らされる会議場のロビー" />
            <img
              src={nw}
              alt="ネットワークスペシャリスト試験の答案用紙とプレミアムモルツの缶"
            />
          </div>
          <figcaption>
            IPA 試験後は近くの公園で飲酒するのが恒例となりつつある{fn("manner")}
          </figcaption>
        </Figure>
        <H2>生活</H2>
        {p`長らくつくばと川崎を往来する生活を送ってきたのですが、今年はかなりつくば中心の生活にシフトしてきました。`}
        {p`昨年からの予想通り、人間関係はかなり激変した一年でした。
          これまでは学類の友人をベースとしたコミュニティを築いてきましたが、
          研究室配属後は自宅と研究室の往復が生活の基本となるので、必然的にそこでの人間関係が中心になってきます。
          とはいえ、研究室は交流が多い方${fn("kyusoku")}で、同期や先輩もおおらかな人達が多く、比較的当たりを引いたとは思っています。
          人間関係にも大きな支障はなかったです${fn("talk")}。`}
        {p`研究室とは不思議な空間だと思います。
          特に（つくばは比較的密な方だとは思いますが）一日同じ空間に集って、昼食を食べ、雑談しつつ研究するみたいな生活は、
          大学になると消失する概念ではあるので、高校までの生活を思い起こすようで懐かしかったです。
          一方、学部 4 年に入ってから元々の友人らとの関係が希薄になりがちな点は残念でなりません。`}
        <H3>飲食情報</H3>
        {p`ごく頻繁に外食に行き、毎月が攻めの外食月間という感じでした${fn("kenko")}。
          最近になって外食の記録を付け初めたのですが、10 月の外食は 33 回、11月は 36 回、12 月は 36 回 でした。
          学部 4 年になると精神的な余裕が減って外食に偏るのだと分析しています${fn("out")}。
          今年から拠点が三学に移ったので、三学名店街にはごく頻繁にお世話になりました${fn("shinjin")}。`}
        <Blockquote>
          今年開拓した（初めて行った）つくば飲食店で良かったお店：
          <br />
          キヤンヤン、大将別館、金治、みなき、ホワイトバジル、コスモス、フライパン、ふくろう、龍介
        </Blockquote>
        {p`そういえば、盛清六も必道もエルトリートもなくなっちゃいましたね…… 特に盛清六は大好きだったので悲しい限りです${fn("midnight")}。`}
        <Figure>
          <div className="imgbox">
            <img src={baqet} alt="パンが大量に積まれた皿" />
          </div>
          <figcaption>つくば初食事はパンのドカ食いに始まった</figcaption>
        </Figure>
        <H2>その他</H2>
        <H3>文章など</H3>
        {p`昨年の暮れに、友人らとのプライベートな Discord サーバに #dailyreport（日報）チャンネルが生え、
          1 年が経過した現在も続いています${fn("dailyreport")}。
          ここまで続くとは思っていなかったので率直に驚きです。
          不味そうな箇所のみマスキングして、
          適宜 ${<Anchor href="/articles/diary">個人サイトにもアップ</Anchor>}${fn("ci")} するようにしています。
          その日の出来事を簡潔にまとめる程度に留めておくのがどうも継続のコツっぽいです。`}
        {p`また、研究室では日本語の用法を細かく指導されているので、
          若干マシな文章が書けるようになっていたら良いなと期待しています。句読点がカンマ（，）とコロン（．）に変わりました${fn("punc")}。`}
        {p`そのほか、ブログに書いた記事だと、以下の記事は比較的反響がありました。`}
        <Ul>
          <li>
            <Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20241007/1728301046">
              2023
              スライドに適した「ニュートラルでデフォルト感のない」フォントを考える
            </Anchor>
          </li>
          <li>
            <Anchor href="https://zenn.dev/inaniwaudon/articles/5d040f543c4c69">
              TypeScript でプログラマブルに動く日本語組版処理システムの提案
            </Anchor>
          </li>
        </Ul>
        <H3>写真</H3>
        {p`昨年に引き続き頻繁に写真を撮っていました${fn("googlephoto")}。
          フジの色味にも大分慣れてきたのでカスタムを色々としてみたのですが、
          最近になってデフォルトに戻したところ、変な癖が抜けたというか、初心に戻った気がして新鮮な感覚でした。`}
        {p`2024 年ベストショットは反町の森公園${fn("sorimachi")}の桜並木です。今年のつくばは春が本当に綺麗でした。`}
        <Figure>
          <div className="imgbox">
            <img src={sorimachi} alt="満開の桜並木" />
            <img src={kiroro} alt="桜の木に挟まるキロロ" />
          </div>
          <figcaption>花見もそういえばよくやった</figcaption>
        </Figure>
        <H3>オタク</H3>
        {p`今年に見たアニメです。
          ユーフォ素晴らしかった、氷菓は美しかった、日常は面白かった、負けヒロイン${fn("makeine")}も最高だった…… なお
          「ゆるキャン△ SEASON 3」と「ささやくように恋を唄う」は途中で脱落しました${fn("shika")}。`}
        <Ul>
          <li>響け！ユーフォニアム（1、2、3、リズと青い鳥、劇場版4作品）</li>
          <li>負けヒロインが多すぎる！</li>
          <li>氷菓</li>
          <li>日常</li>
          <li>四畳半神話大系</li>
          <li>デッドデッドデーモンズデデデデデストラクション</li>
          <li>夜は短し歩けよ乙女</li>
          <li>言の葉の庭</li>
          <li>じゃんたま PONG</li>
          <li>てーきゅう</li>
        </Ul>
        {p`併せて聖地巡礼にもよく行きました。
          ${<Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20240204/1707056780">「安達としまむら」の舞台</Anchor>} となった岐阜県本巣市、マジで良かった……`}
        <Ul>
          <li>岐阜、本巣、名古屋：「安達としまむら」</li>
          <li>千葉：「やはり俺の青春ラブコメはまちがっている。」</li>
          <li>小山：「秒速 5 センチメートル」</li>
          <li>宇治、京都、名古屋：「響け！ユーフォニアム」</li>
          <li>高山：「氷菓」</li>
          <li>豊橋：「負けヒロインが多すぎる！」</li>
        </Ul>
        <Figure>
          <div className="imgbox">
            <img
              src={adashima}
              alt="「安達としまむら」の漫画2冊と、後ろに映るモレラ岐阜"
            />
            <img src={hibike} alt="川辺に座るキロロ" />
          </div>
          <figcaption>
            モレラ岐阜（岐阜県本巣市）、宇治川（京都府宇治市）
          </figcaption>
        </Figure>
        <H4>コミックマーケット</H4>
        {p`夏／冬合わせて行ってきました。
          冬コミの C105 で 7 回目の参戦となります。
          夏コミは 2 日目がインターンに被ってしまったので初日のみの参戦でした。
          何故か毎回微妙な体調（寝不足等）のまま行っているので、体力的には結構厳しいです。
          特に夏コミ、酷暑すぎて死ぬかと思った…… 来年はコミケに耐えうる体力を付けていきたいです。
          あっ、あと来年こそは技術書典かコミケにサークル側での参加を目指します！！`}
        <Figure>
          <div className="imgbox">
            <img src={c105} alt="夕暮れ" />
          </div>
          <figcaption>冬コミ終わりは本当に空が綺麗</figcaption>
        </Figure>
        <H3>オムニバス</H3>
        <Ul>
          <li>美術展に行った</li>
          <li>やきいもをやった</li>
          <li>NISA を始めて 60 万円投資した</li>
          <li>FX を始めて 3 日で退場した</li>
          <li>横田基地友好祭に 2 年ぶりに行った</li>
          <li>
            学内の LT 会に行った（
            <Anchor href="https://speakerdeck.com/inaniwaudon/ltknwlwjy-wr-llg-at-lrby-at">
              UNTIL.LT
            </Anchor>{" "}
            / mast LT）
          </li>
          <li>大学説明会に出た</li>
          <li>ビアフェスに行った</li>
          <li>蒼煌祭に 4 年ぶりに行った</li>
          <li>重めの風邪に掛かって長引いた</li>
          <li>情報系が集まる謎の BBQ に参加した</li>
          <li>
            内見に行った、引っ越し先を<s>決めた</s> 決められませんでした
          </li>
        </Ul>
        <H2>むすびにかえて</H2>
        {p`大晦日の振り返り記事は大学 1 年の頃に書き始めて、今年で 4 年目になります。
          過去を振り返る際、写真も有力な手掛かりの一つですが、
          文章として記録に残すとまた別の価値が生まれるのだと確信しています。`}
        {p`2024 年、みなさんはどんな一年だったでしょうか？ 希薄になる人間関係も多かった一方で、
          比較的外出していたこと、人間とよくご飯を食べたこと、
          よく旅行に行ったことなどから、個人的にはかなり安定した一年でした。
          昨年よりは確実に良い月日が流れたと思います。
          生活の中心となる研究が苦しいのは衆目の一致するところですが、
          やるべきことが明確になったのは精神に好影響を与えました${fn("shousou")}。
          その一方で、学部 4 年になってから、漠然と自分も周囲も少しずつおかしくなっていったように感じる機会が増え、
          実際にそれを象徴するような出来事もありました。
          また、周囲の人生が確実に進んでいることは常日頃から理解しています${fn("life")}。
          自分を詳らかにしていきたいという思いが強まった一年でもありました。`}
        {p`末筆ながら、現在自分が現在こうして過ごせているのは、周囲の人々に恵まれていたからだと偏に実感しています。
          本当にありがとうございました。
          来年は現状を維持しつつ、生活が破綻しない程度に高みを目指していければと思います。`}
        {p`――大晦日も残すところ数時間となりました。
          例年通り、中島みゆき「時代」の歌詞を引用して結びに代えたいと思います。`}
        <Blockquote>
          まわるまわるよ時代はまわる 別れと出逢いを繰り返し
          <br />
          今日は倒れた旅人たちも 生まれ変わって歩き出すよ
          <br />
          時代 ／ 中島みゆき（1985）
        </Blockquote>
        {p`2025 年が始まります。どうぞ良いお年をお迎えください！！`}
        <H3>過去ログ</H3>
        <Ul>
          <li>
            <Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20231231/1704013026">
              2023 年を振り返って
            </Anchor>
          </li>
          <li>
            <Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20221231/1672497754">
              2022 年を振り返って
            </Anchor>
          </li>
          <li>
            <Anchor href="https://soudakyoto-ikou.hatenadiary.jp/entry/20211231/1640943650">
              2021 年を振り返って
            </Anchor>
          </li>
        </Ul>
        <Footnotes>
          {footnotes.map((footnote, i) => (
            <li id={`footnote${i}`} key={i}>
              <a href={`#fn${i + 1}`}>{`[${i + 1}]`}</a>
              {`${footnote[1]}`}
            </li>
          ))}
        </Footnotes>
      </Main>
    </PageWrapper>
  );
};

export default Index;
