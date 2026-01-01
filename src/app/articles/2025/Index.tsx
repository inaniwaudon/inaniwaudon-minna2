import styled from "@emotion/styled";

import Anchor from "@/components/common/Anchor";
import H2 from "@/components/common/H2";
import H3Inner from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";

import adobe1 from "@/assets/2025/adobe1.webp";
import adobe2 from "@/assets/2025/adobe2.webp";
import c107_1 from "@/assets/2025/c107-1.webp";
import c107_2 from "@/assets/2025/c107-2.webp";
import cherry1 from "@/assets/2025/cherry1.webp";
import cherry2 from "@/assets/2025/cherry2.webp";
import cherry3 from "@/assets/2025/cherry3.webp";
import cojt1 from "@/assets/2025/cojt1.webp";
import cojt2 from "@/assets/2025/cojt2.webp";
import expo1 from "@/assets/2025/expo1.webp";
import expo2 from "@/assets/2025/expo2.webp";
import expo3 from "@/assets/2025/expo3.webp";
import github from "@/assets/2025/github.webp";
import hikkoshi1 from "@/assets/2025/hikkoshi1.webp";
import hikkoshi2 from "@/assets/2025/hikkoshi2.webp";
import hokkaido1 from "@/assets/2025/hokkaido1.webp";
import hokkaido2 from "@/assets/2025/hokkaido2.webp";
import hokkaido3 from "@/assets/2025/hokkaido3.webp";
import hokkaido4 from "@/assets/2025/hokkaido4.webp";
import kagoshima1 from "@/assets/2025/kagoshima1.webp";
import kagoshima2 from "@/assets/2025/kagoshima2.webp";
import mobilehci1 from "@/assets/2025/mobilehci1.webp";
import mobilehci2 from "@/assets/2025/mobilehci2.webp";
import montreal1 from "@/assets/2025/montreal1.webp";
import montreal2 from "@/assets/2025/montreal2.webp";
import montreal3 from "@/assets/2025/montreal3.webp";
import montreal4 from "@/assets/2025/montreal4.webp";
import montreal5 from "@/assets/2025/montreal5.webp";
import montreal6 from "@/assets/2025/montreal6.webp";

import nuigurumi1 from "@/assets/2025/nuigurumi1.webp";
import nuigurumi2 from "@/assets/2025/nuigurumi2.webp";
import okinawa1 from "@/assets/2025/okinawa1.webp";
import okinawa2 from "@/assets/2025/okinawa2.webp";
import sotsuron from "@/assets/2025/sotsuron.webp";
import sui1 from "@/assets/2025/sui1.webp";
import sui2 from "@/assets/2025/sui2.webp";
import wiss1 from "@/assets/2025/wiss1.webp";
import wiss2 from "@/assets/2025/wiss2.webp";

const title = "2025 年を振り返って";

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
    "2025",
    "実は 2025 年中に本エントリを出すことは間に合わなかったのですが異次元のタイムスタンプ書き換えで……",
  ],
  [
    "mourou",
    "朦朧とした意識の中で書いたエントリなので文の可読性が下がっていても許してほしい",
  ],
  [
    "cold",
    "沖縄とは対照的。旭川→北見→釧路の順に気温が下がっていったのが印象的でした",
  ],
  ["flight", "航空券はポシャった"],
  [
    "jr-hokkaido",
    "新得駅で「在来線」と表現したら新幹線以外はすべて在来線と駅員さんから指摘され、初めて在来線の定義を知りました。ときに JR 北海道の石北本線では特別快速「大雪」と特急「オホーツク」はほぼ同等の性能らしいです",
  ],
  [
    "walk",
    "夜にも一人で散歩をしたのですが、大通りを歩けば治安的にも特に不安を感じることはありませんでした",
  ],
  ["description", "2倍の面積取るのでデザイナさんは大変そう"],
  ["amagif", "副賞のアマギフは白いリキュール × 2本に消えた"],
  ["cs", "本当か？"],
  [
    "mochiron",
    "体感としては AP の内容 +α を 3 年間掛けてやったような印象。勿論そうでない授業もあります",
  ],
  [
    "shukatsu",
    "特に近年は就活早期化で修士課程が就活予備校みたいになっていて本当に渋いと思っている",
  ],
  ["toittemo", "といってもやっぱり大変ではありましたが"],
  [
    "japanese",
    "しかも日本語入力の研究なので全然理解されなかった。ひとえに自分の実力不足です",
  ],
  ["shakaisei", "獲得できたかは怪しい"],
  ["ryunen", "休学・留年勢も多い"],
  [
    "pc",
    "何故か RAM 8 GB、SSD 256 GB の貧弱な Mac で開発を未だに続けており苦しい。Adobe Premiere Pro、Xcode、Unity はいずれも両立しないのでどれかを入れる度にどれかを消すみたいな運用になっています",
  ],
  ["dabun", "こんな駄文を書いてる暇があるなら先ずコードを書くべきなのでは？"],
  ["front", "特に Web フロントエンドは真っ先に討伐される存在だと思っている"],
  ["base", "ただ、基礎がないと使いこなせないというのはまだ見ていて感じます"],
  [
    "curl",
    "curl を launchd で定期実行して状況を更新します。この手のツールは curl を使えるかの試金石になっている",
  ],
  [
    "spring",
    "これは上手い制度設計で、春期は通って気分が良くなるので秋期も申し込んでしまう",
  ],
  ["ipa", "来年からは CBT になるので大分受けやすくなると思います"],
  [
    "nomikai",
    "飲酒は未だに好きですが最近は飲み会をしようという気力はそれほど強くない",
  ],
  ["count", "ミスドでドーナツを頼んでも 1 回、飲み会に行っても 1 回カウント"],
  [
    "todoroki",
    "一方で消えていく店も多く（人知れず閉店したとどろき等）、つくばも 5 年もいると流石に諸行無常を感じるようになってきます",
  ],
  [
    "bestbuy",
    "基本的に食費／旅行以外にお金を使っていないのでガジェット等のベストバイがない",
  ],
  ["health", "徹夜とか本当にできなくなった"],
  [
    "prison",
    "筑波では宿舎を監獄と呼ぶ風習があり、ゆえに宿舎を脱することを俗に脱獄と呼ぶ。ちなみに北海道旅行の際に網走刑務所の監獄（再現）を見てきたのですが、本当に筑波大学の宿舎と同等でした",
  ],
  [
    "cloudflare",
    "加えて、Cloudflare Workers/R2 のアップロードが稀に失敗するという現象も発生している",
  ],
  [
    "level",
    "電化製品や家具の多くは友人や先輩から頂いたもので（ちゃぶ台、ラグマット、ガスコンロ、炊飯器、トースター、テレビ）、「北の国から」に登場する「拾ってきた家」さながらの様子になっている",
  ],
  [
    "diff",
    "持論ですが、アパートの家賃 - 宿舎代の差分以上に宿舎で生活することによる支障は大きいと考えています。健やかになった分で労働した方が金銭的にもプラスになるはずです",
  ],
  [
    "llm-sentence",
    "ざっと大枠だけ書いて「体裁を整えて」「もうちょっと知的な文章にして」等の指示を与えると執筆のスピードが数倍にも跳ね上がります。それで良いのかという話はあるのですが……",
  ],
  [
    "record",
    "記録を残すと実務的な面でメリットがある（例：クレジットカードの請求が正しいかを日報と照らし合わせて確認できる）ことに加え、ある友人は精神的にも好影響を与えていると話していました",
  ],
  ["dailyreport", "厳密には 2–3 日毎に 2–3 日分を投稿している"],
  [
    "hatachi",
    "今年で二十歳らしい。ところでぬいぐるみは法では裁けないらしいですね",
  ],
  [
    "nanko",
    "南港に行ったのは十余年ぶりだったのですが、ATC 辺りの何とも言えない雰囲気が最高にエモでした",
  ],
  ["myaku", "家ではミャクと呼ばれている"],
  ["thai", "送料のほうが高かった"],
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
        <p>2025/12/31</p>
        {p`年の瀬ですね。今年の大晦日はコミックマーケット（C107）に初サークル参加を果たしてきました！！おかげさまで大好評のうちに完売し、多忙ながらも充実度の高い師走を過ごすことができました。本当に最高の年末です。`}
        {p`――2025 年が終わります${fn("2025")}。大晦日は一年の振り返りエントリを認めることが恒例となっているので、今年も ${<Anchor href="/articles/2024">昨年同様</Anchor>} に一年の振り返りエントリをお送りしたいと思います${fn("mourou")}。
          移動、研究、開発、生活、その他に分けて話を進めていきます。`}

        <H2>移動</H2>
        {p`今年の長距離移動は以下の通りでした。春に沖縄に行ったと思えば今度は九州に行ったり、
          北海道も 2 回訪れたり、1 年半ぶりに海外に行ったりと長距離移動が多めの一年でした（当人比）。`}
        <Ul>
          <li>1月上旬：山口（帰省、4日間）</li>
          <li>2月中旬：葉山（研究室合宿、2日間）</li>
          <li>2月下旬：山梨（2日間）</li>
          <li>3月中旬：沖縄（5日間）</li>
          <li>3月中旬：鹿児島・熊本（3日間）</li>
          <li>3月下旬：伊香保温泉（3日間）</li>
          <li>7月上旬：北海道（7日間）</li>
          <li>9月中旬：福岡（インターン、3日間）</li>
          <li>9月下旬：大阪万博（3日間）</li>
          <li>9月下旬：山梨（研究室合宿、2日間）</li>
          <li>11月上旬：モントリオール（SUI 2025、6日間）</li>
          <li>11月下旬：韓国（3日間）</li>
          <li>12月上旬：定山渓（WISS 2025、4日間）</li>
        </Ul>
        {p`毎年恒例となった学類同期との旅行では沖縄を選びました。人生初！ 3 月であるにも関わらず沖縄は温暖で、アロハシャツを着用したり海で泳いだりと旅行に最適な気候でした。巡った場所も首里城、海中道路、ひめゆりの塔、美ら海水族館……と名所づくしでした。
          研究室同期との卒業旅行では鹿児島・熊本に行きました。鹿児島の居酒屋でドキドキしながら鳥刺しを食べてカンピロバクターチャレンジを試みたのも良き思い出です。`}
        <Figure>
          <div className="imgbox">
            <img src={okinawa1} alt="沖縄の海と空" />
            <img src={okinawa2} alt="沖縄にいた猫" />
            <img src={kagoshima1} alt="天文館の商店街" />
            <img src={kagoshima2} alt="鳥刺し" />
          </div>
          <figcaption>
            沖縄の青すぎる海。「涙そうそう」を聞きながら、那覇空港の手前までゆいレール沿いを
            10 km 程度深夜徘徊したりもした
          </figcaption>
        </Figure>
        {p`7 月には学会投稿が終わって少し暇ができたため、一週間ほど一人で北海道を旅行してきました。当初は札幌から富良野に向かい、「北の国から」の舞台を眺めて帰る予定だったのですが、折角の機会かつ時間もあったので旅程を延長して${fn("flight")}、JR 北海道の普通／快速列車${fn("jr-hokkaido")}で札幌–富良野–旭川–北見–網走–釧路–根室–帯広–千歳を一周することにしました。特に旭川–北見（石北本線）、釧路–帯広（根室本線）間は車内に人の気配がなく、携帯が繋がらない区間もあって現代から取り残されたような気分でした。
          真夏であるにも関わらず釧路の夜の気温は 14 ℃${fn("cold")}で、半袖の T シャツしか持ち合わせていない状態で深夜徘徊をしたせいか、帰ってからは一週間ほど謎の体調不良に襲われました。`}
        <Figure>
          <div className="imgbox">
            <img src={hokkaido1} alt="北見駅" />
            <img src={hokkaido2} alt="ノロッコ号" />
            <img src={hokkaido3} alt="釧路駅" />
            <img src={hokkaido4} alt="花咲線" />
          </div>
          <figcaption>
            無限ローカル鉄道旅行編。札幌とそれ以外では結構雰囲気の違いを感じた
          </figcaption>
        </Figure>

        {p`9月には大阪万博を見に行きました。といっても閉幕間際の駆け込み需要だったため混雑を極めており、メジャーなパビリオンにはほぼほぼ入れませんでした。もっと早く訪れておくべきだったと悔やまれます。ただ大屋根リングにも登れたしドローンショーも見られ、何より雰囲気を味わえただけでも大満足です。`}
        <Figure>
          <div className="imgbox">
            <img src={expo1} alt="大屋根リング前のミャクミャクのオブジェ" />
            <img src={expo2} alt="夜に輝く大屋根リング" />
            <img src={expo3} alt="フランス館" />
          </div>
          <figcaption>
            夜のパビリオンが燦然と光を放っていて大変良かった
          </figcaption>
        </Figure>

        {p`11 月の学会ではカナダ・モントリオールを訪れました。エア・カナダを使って成田–バンクーバー–カルガリー–モントリオールのルートで向かいましたが、変なトランジットを選んでしまったせいで移動だけで 30 時間掛かるハードスケジュールでした。バンクーバーもカルガリーも空港の隅から隅まで探検しても有り余るほどの時間がありました。11 月のモントリオールは既に気温が一桁〜氷点下で、ちょうど訪れた日辺りが初雪とのことで紅葉と雪のコラボレーションが大変綺麗でした。学会の前後には時間があったので旧市街を散歩${fn("walk")}したり、モントリオール・ノートルダム聖堂を訪れたりしました。モントリオールの特徴としては、フランス語表記がメインであること（他の都市だと英仏が併記されている${fn("description")}）、世界最大の地下街が無数に張り巡らされていることなどが挙げられました。`}
        <Figure>
          <div className="imgbox">
            <img src={montreal1} alt="機内からみた朝焼け" />
            <img src={montreal2} alt="モントリオールの朝の雪景色" />
            <img src={montreal3} alt="スモークドミート" />
            <img src={montreal4} alt="モントリオールの夜の街並み" />
            <img src={montreal5} alt="モントリオール・ノートルダム聖堂" />
            <img src={montreal6} alt="地下街" />
          </div>
          <figcaption>
            モントリオールは、近代的なビル群と、石畳等が残るヨーロッパ風の街並みが上手く調和した街並みでした。ご飯は何を食べても肉！芋！みたいな感じで、それほど刺さらなかったというのが率直な感想
          </figcaption>
        </Figure>

        <H2>大学</H2>
        {p`今年も自宅と大学を往復する生活を送っていました。
          大学は暖かい（物理的に保温性が高い、の意味）ので良いですよね。`}
        <H3>卒業と入学</H3>
        {p`春、春の代名詞といえば卒業です。
          私も 3 月に晴れて ${<Anchor href="https://www.mast.tsukuba.ac.jp/">情報学群 情報メディア創成学類</Anchor>} を卒業し、無事に大卒になりました！  本当にめでたいです。卒業式は気怠いなあとすら思っていたのですが、いざ行ってみると素晴らしい一日になりました。
          大学会館前でお酒を飲んだり、柄にもなく集合写真を撮ったりして、改めて良い友人を持ったことを実感した限りです。
          卒業時に情報学群長表彰／校友会賞を貰えたのも良かったです${fn("amagif")}。`}
        {p`4月からは ${<Anchor href="https://www.cs.tsukuba.ac.jp/">システム情報工学研究群 情報理工学位プログラム</Anchor>} に所属し、CS専攻${fn("cs")}の院生としてモラトリアムを延長しています。
          入学式の後は松美池横のベンチで飲酒して、研究室でも飲み会をしました。
          桜の花が青空に映えるよく晴れた日で、新たな門出を意識させる日だったと記憶しています。`}
        <Figure>
          <div className="imgbox">
            <img src={cherry1} alt="キロロと桜" />
            <img src={cherry2} alt="カルピスサワーとほろよいのお酒" />
            <img src={cherry3} alt="桜の花びらが入った日本酒" />
          </div>
          <figcaption>
            入学式前に新装開店した「ゑびすや」に行ったところ謎の花をくれたのでそれを持っていった
          </figcaption>
        </Figure>
        {p`卒業エントリみたいなものは書かなかったので本エントリにその要素を含めておくと、学部教育は何を与えてくれたか？みたいなことを考えることが稀にあります。ネットで調べても LLM に聞いても無限に文献が出てくる時代に、メ創の授業は基礎的な内容を薄く伸ばしたようなものが多かったため${fn("mochiron")}、座学的な知識として授業から得た部分はそう多くなかったように感じます。一方、筑波には様々な人が居て、様々な人と出逢ったり、何か共同作業をしたり、研究をしたりするなかで得られた経験には大きな価値があったのだと思います。`}

        <H3>研究</H3>
        {p`修士も半分が終わろうとしていて（大学 4 年からの研究生活だと既に半分終わった）、月日はかくも速く過ぎていくものだと改めて痛感しています${fn("shukatsu")}。今年の主な（研究にまつわる）トピックは 卒論提出 → MobileHCI 投稿（不採択）→ SUI 投稿（採択）→ グッドデザイン・ニューホープ賞投稿（落選）→ 某審査 → WISS 投稿（査読なし）といった流れで進み、結果的に ${<Anchor href="https://www.iplab.cs.tsukuba.ac.jp/paper/international/wada_SUI2025.pdf">国際会議の口頭発表</Anchor>} + ${<Anchor href="https://www.wiss.org/WISS2025Proceedings/data/demo/2-C24.pdf">国内会議のポスター発表</Anchor>} を 1 回ずつ行いました。`}

        <H4>卒論、MobileHCI</H4>
        {p`時系列順に追っていくと、まず卒業のために ${<Anchor href="https://www.iplab.cs.tsukuba.ac.jp/paper/bachelor/wada_bachelor_thesis.pdf">卒業論文</Anchor>} を書きました。
          クオリティが高いとは言い難いものでしたが、とりあえず 84 ページ（うち本文 41 ページ）書いたので及第点だとは思います。
          卒論提出を無事に終えた際には軽くビールで乾杯して、スタバのフラペチーノを飲みに行きました。`}
        {p`――とここまでは良かったのですが、MobileHCI という国際会議の論文締切がなんと卒論シーズンともろ被りしてしまい、
          卒論提出から一週間ほどは無限に死ぬ思いをしていました。
          カフェインを過多に摂取すると身体がゴリゴリと削れていく音が響き渡るので本当にお勧めしません。
          論文締切の日は締切の 21:00 ギリギリまで投稿作業をして、その後に打ち上げで寿司を食べたのですが、あまりに疲れていて会話もままならなかったという朧気な記憶だけが残っています。`}
        {p`締切の翌日は夕方まで爆睡して、夜に研究室同期と 3 人で飲みに行きました。
          そこから 1 ヶ月くらいはすべてを捨てて無限に放浪していて、先述の沖縄旅行中に不採択通知が届き、国際会議初挑戦の夢はこうして敗れたわけです。
          といっても 3 月の沖縄があまりに良すぎたので特にマイナスの感情を抱くことはありませんでした。`}
        <Figure>
          <div className="imgbox">
            <img src={sotsuron} alt="「卒論提出」のくす玉" />
            <img src={mobilehci1} alt="宅配寿司" />
            <img src={mobilehci2} alt="鍋" />
          </div>
          <figcaption>
            あじ彩、つくば 4 年目にして初だったのに何故か今年は 4 回行った
          </figcaption>
        </Figure>

        <H4>SUI、WISS</H4>
        {p`年度も変わった頃に研究室に戻ってきて、今度は SUI という国際会議に、落ちた論文を投げ直そうという話になりました。
        落とされた論文をベースに、査読で指摘された部分をひたすら修正していくだけだったのでそれほど大変ではなかった${fn("toittemo")}です。
          6 月：投稿 → 7 月：条件付き採択 → 8 月：再投稿を経てようやく採択になり、11 月にモントリオールで発表してきました。1 月から数えると 1 年弱を要したわけで長い戦いでした。
          発表当日、私は英語が全然喋れないので凄惨な質疑応答が繰り広げられた${fn("japanese")}わけですが、それでも海外まで発表しにいくことには大変価値があったと感じます。なお、グッドデザインニューホープ賞という学生向けのデザイン賞にも研究内容を投げたのですが、こちらはあえなく落選でした。`}
        {p`また、新しいテーマで WISS 2025 のポスター発表に行きました。昨年に引き続き 2 年目です。今年は北海道の定山渓で開催されました。懇親会でお酒を飲んだら気持ちよくなったので夜の雪道を後輩と散歩しました。`}
        <Figure>
          <div className="imgbox">
            <img src={sui1} alt="SUI の看板" />
            <img src={sui2} alt="ネームプレートを掛けるキロロ" />
            <img src={wiss1} alt="朝食の海鮮丼ブッフェ" />
            <img src={wiss2} alt="北のサングリアサワー" />
          </div>
          <figcaption>来年もどこかしらを目指していきます</figcaption>
        </Figure>

        <H3>授業</H3>
        {p`春学期は 13 単位、秋学期は 6 単位（うち必修がそれぞれ 3 単位ずつ）履修しました。
          大学院は履修すべき単位数が少なく、ヨーガや国土等を題材とした謎の授業も多くて助かります。
          今年の授業ピックアップとしては、${<Anchor href="https://kdb.tsukuba.ac.jp/syllabi/2025/0ATU103/jpn">色彩デザイン論特講</Anchor>} という色彩論を扱う授業が楽しかったです。デザイン学学位プログラムの授業であるにも関わらず何故か情報系の友人が（示し合わせたわけでもなく）受講していて、授業終わりによくお昼を食べに行きました。`}
        {p`また修士に進んだため、プログラミング言語論（春学期） + 組込みキャンパス OJT（COJT、通年）のティーチングアシスタント（TA）をやっていました。
          学部 4 年以降は研究室外の人（特に下級生）とは関わる機会がめっきり減るため、社会性の獲得みたいな点でもかなりプラスでした${fn("shakaisei")}。
          特に今年度の COJT は学生間や学生–TA 間の距離も近くて良いなと思います。受講生と雑談や飲み会をしたりしていたら 2025 年が終わっていました。
          夏には花火等もできて楽しかったです。`}
        <Figure>
          <div className="imgbox">
            <img src={cojt1} alt="線香花火" />
            <img src={cojt2} alt="光っている酒" />
          </div>
          <figcaption>お酒も光っている</figcaption>
        </Figure>

        <H3>その他</H3>
        {p`卒業に際して、情報系の友人のほとんどは院進${fn("ryunen")}した一方で、僅かながらつくばを去っていていった友人もいました。
          引っ越し時、つくばを去る友人からちゃぶ台を貰って新居まで一緒に運んでいる最中にはふと寂しさを感じて、自分にもまだ人間っぽい感情が残っていたことに思い掛けず驚いた次第です。`}
        {p`雙峰祭では「驚額の殿堂」としてフランクフルトを焼きました。3 年目になりますが、今年は自分が企画責任者ではなかったため、負担としてはかなり軽かったです。
          フランクフルトも初日は 150 円で販売していましたが、2 日目に 100 円への値下げを断行したところ他団体も追随しはじめ、市場経済を身近に感じる好機となりました。
          また、今回の新たな試みとして、情報系の友人らと技術同人誌を作って頒布しました。${<Anchor href="https://booth.pm/ja/items/7737727">Booth で頒布中です（宣伝）</Anchor>}！！
          自分も 1 記事寄稿したのに加えて、Typst での組版や編集／入稿作業を主に担当しました。
          ただ、10–11 月は学会発表の準備等々に運悪く重なってしまい、その他のシステム開発や当日の運営にはあまりコミットすることが出来なかった点が悔やまれます。`}

        <H2>開発</H2>
        {p`趣味では TypeScript, React を、労働では Vue.js, Python を、研究では Swift, Unity を書いていました。
          Unity って辛いですよね〜〜${fn("pc")}。今年の GitHub の contribution 数は 1,549 でした。昨年が 1,740、一昨年が 2,481 であったため減少の一途を辿っています。開発ももっと進めて行きたいところではありますが、なかなか時間が取れないなあというのが実情です${fn("dabun")}。`}
        <Figure>
          <div className="imgbox">
            <img src={github} alt="GitHub の Contribution を表すヒートマップ" />
          </div>
          <figcaption>
            一方で GitHub の草を生やす行為に偏重するのも良くない気はする
          </figcaption>
        </Figure>

        <H3>AI 時代の開発</H3>
        {p`今年の開発を取り巻く大きな変革としては、やはり LLM の隆盛と実用化が挙げられると思います。
          昨年辺りまでエーアイといえば書き捨てる Python コードやシェルスクリプトに ChatGPT を使う程度だったのですが、
          今年からは個人開発、労働、研究等々、様々なところで無限に 𝑣𝑖𝑏𝑒 𝑐𝑜𝑑𝑖𝑛𝑔 を行っています。
          Cursor も Claude Code も大変便利で、自分よりも遥かに素早く正確なコードを書いてくれます。`}
        {p`そんなわけで私は AI が書けるなら可能な限り任せたほうがいいじゃん、という立場に翻ったのですが${fn("front")}、
          情報系だと LLM に未だに懐疑的な人々も多く、AI コーディング以前からプログラムを書いていたのに割り切っている人間は珍しいね、と言われたこともあります。一方、AI ネイティブ世代には私よりも何倍も LLM の活用が上手く、それによって卓越したパフォーマンスを出している人もいて、そうした人々に出逢う度にこれは完敗だなーと感じています${fn("base")}。`}

        <H3>労働</H3>
        {p`今年もあるスタートアップで労働をしていました。学部 1 年の 6 月から初めて、年末でちょうど 4 年半になります。今年は ${<Anchor href="https://note.com/soudakyoto_ikou/n/n84e13b982860">開発内容に関する記事</Anchor>} も書くことも出来ました。組版周りを相変わらず開発させてもらっていますが、実運用を進める上では日々様々な課題が生じるもので、それを解いていく作業は楽しいです。
        お金も生活に困らない程度には貰えていて、今年からは親からの住居費や生活費の支援がなくなってしまったので、生活を支えていくうえでも本当に助かっています（ありがとうございます）。`}

        <H3>個人開発</H3>
        {p`個人開発もささやかながら行いました。主に開発したものとしては以下の通りです。`}
        <Ul>
          <li>
            <Anchor href="https://github.com/inaniwaudon/clipshort">
              clipshort
            </Anchor>
            （3 月）
            <br />
            Control + K ボタンを押すと起動して、LLM
            とシームレスに対話できるアプリケーションです。考えついたときは天才的なインタフェースだろ！！！と思ったのですが、Raycast
            等で既に実用化されているようでした。未だに翻訳等で使っています。
          </li>
          <li>
            <Anchor href="https://github.com/Make-IT-TSUKUBA/alternative-tsukuba-kdb">
              KdB もどき
            </Anchor>
            （3 月）
            <br />
            今年度で 5
            年目の運用になります。春先に久しぶりに大きく手を入れて、React
            で動くようになりました。
          </li>
          <li>
            <Anchor href="https://github.com/inaniwaudon/illustrator-mcp">
              illustrator-mcp
            </Anchor>
            （5 月）
            <br />
            Adobe Illustrator を自然言語で操作できるようにするための MCP
            サーバです。
            {
              <Anchor href="https://aaam.connpass.com/">
                アドビアプリ自動化もくもく会
              </Anchor>
            }
            でお話をする機会をいただき、大崎にあるアドビのオフィスに行きました。
          </li>
          <li>
            <Anchor href="https://tsukuba.yokohama.dev">
              tsukuba.yokohama.dev
            </Anchor>
            （7 月）
            <br />
            筑波大学にいるかいないかを可視化する Web サイトです
            {fn("curl")}
            。異常生活を送っていると一発でバレるようになっています。
          </li>
          <li>
            <Anchor href="https://github.com/inaniwaudon/komyaku-cursor">
              こみゃくカーソル
            </Anchor>
            （11 月）
            <br />
            大阪万博の「こみゃく」をモチーフにした、可愛い挙動のカーソルです。当初「驚額の殿堂」同人誌のネタにしようと思っていたのですが、同人誌へのこみゃくの利用は
            NG
            ということに後になって気付いたため、同人誌の記事からはこみゃくの要素を抜いて、ただ単にカーソルについて解説する内容になりました。
          </li>
          <li>
            <Anchor href="https://github.com/inaniwaudon/google-form-history">
              google-form-history
            </Anchor>
            （11月）
            <br />
            Google フォームの送信内容を回答者が後から確認できるようにする Chrome
            拡張機能です。即効性はないですが、あると地味に便利な機能を実装できたと考えています。
          </li>
        </Ul>

        <Figure>
          <div className="imgbox">
            <img src={adobe1} alt="Adobe のオフィスのロゴ" />
            <img src={adobe2} alt="実演画面" />
          </div>
          <figcaption>アドビのオフィスは内装がお洒落でした</figcaption>
        </Figure>

        <H3>資格</H3>
        {p`春期にシステムアーキテクト試験（SA）を受験しました。2000 字以上を 2 時間で書き切るという共通テストもびっくりの論述試験${fn("ipa")}で、絶対落ちたやろと思ったのですが何故か通っていました。現代文パワー！`}
        {p`一方の秋期は毎年恒例のデータベーススペシャリスト試験（DB）を受験し、無事に午後 II で 2 点足りず不合格となりました。DB 落ち落ち落ち落ちです。他の試験は一発で通っていることに鑑みると、データベースが極めて難解であることは言うまでもありません${fn("spring")}。`}

        <H2>生活</H2>
        {p`生活／人間関係ともに昨年とあまり変化のない一年でした。
        昨年のほうが研究室内での結束や飲み会の回数自体は強かった／多かったのですが、今年も特に支障はなかったです${fn("nomikai")}。`}

        <H3>飲食情報</H3>
        {p`私は基本的に弁当、カップ麺、外食のいずれかで食事を賄っており、特に外食をした際には昨年同様「どこに／誰と」行ったかを記録に残すようにしています。
          これと日報（後述）+ iPhone のカメラロールを組み合わせれば生活の記録がおおかた復元可能になるという仕掛けです。
          そんな今年の外食カウントは 391 回（1 月から 30、36、35、32、25、28、40、24、35、24、39、43 回）でした。
          1 日 1 回を越えていて驚きを隠せません${fn("count")}。
          最近だと人間の幸福さは他人との外食回数に概ね比例するのではないか？と仮説を立てています。`}

        {p`飲食店については、研究室の位置する総合研究棟 B から程近い天久保 3 丁目は大体行き尽くした感があります${fn("todoroki")}。今年初めて行って良かった飲食店としては次のお店が挙げられます。`}

        <Blockquote>
          今年初めて行って良かったお店
          <br />
          わかたろう、肉の番人、JUN-CHAN、龍介、カリビアンカフェ、くぅべ
        </Blockquote>

        {p`今年のベストバイ${fn("bestbuy")}は以下の 3 つでした。最近は周囲も私も健康を意識し始めているため${fn("health")}、コンビニでカット野菜を頻繁に買って食べるようにしています。数年前まではカップ麺に白米を入れていたところも中華めん用野菜に変化しつつあります。`}

        <Ul>
          <li>
            三元豚ロースかつ重（トライアル）
            <br />
            299 円でカツ丼が買えるという驚異的な事実に気付いて以来 2–3
            回／週で食べています。
          </li>
          <li>
            凄麺 ねぎみその逸品（ニュータッチ）
            <br />
            カップ麺にしてはやや高めの相場ですが他のカップ麺の追随を許さないクオリティ。凄麺シリーズでも群を抜いていて、同様にみそ味である札幌や仙台よりも美味しいと思います。
          </li>
          <li>
            ピエトロドレッシング 和風しょうゆ（ピエトロ）
            <br />
            野菜にピエトロドレッシングを掛けて食べると本当に美味いです。無限に食べられます。
          </li>
        </Ul>

        <H3>引っ越し</H3>
        {p`遂に宿舎を脱獄${fn("prison")}し、アパートに住み始めました（3.5 万円の安アパートですが……）。壁の薄さゆえに冬になると冷気が通り抜けてくることだけが気掛かりですが、それ以外は取り立てて不便はないです。
          筑波のアパートにしては珍しく備え付けのインターネット回線がないため、${<Anchor href="https://otegal.jp/">おてがる光</Anchor>} を契約しました。
          何故か ChatGPT と X の画像アップロード${fn("cloudflare")}が利用できないのですが、それを除けば安価で回線も速く快適に使えています。`}
        {p`また、転居に併せてガラス製のコップや皿を買いました。最近は雪平鍋を買って袋麺の調理も実現されるなど、生活レベルの向上${fn("level")}をひしひしと実感しています。そう考えると宿舎は本当に精神衛生に良くなかったです${fn("diff")}。`}

        <Figure>
          <div className="imgbox">
            <img src={hikkoshi1} alt="フォントかるた" />
            <img src={hikkoshi2} alt="ジンギスカン" />
          </div>
          <figcaption>引っ越し祝いのフォントかるたとキヤンヤン</figcaption>
        </Figure>

        <H2>その他</H2>
        <H3>文章など</H3>
        {p`文章を頻繁に書いた一年でした。論文や提案書の類もそうですし、同人誌に寄稿した文章等も含めての話です。一方でブログ等のインターネット上に放流する文章は少なめでした。LLM を使って文章を書くことも増えてきました${fn("llm-sentence")}。`}
        {p`また、先述の外食記録にもあるように、最近は生活の記録を残すことを重視しています${fn("record")}。友人との Discord 鯖に設けられた日報（日記）を投げ続けるチャンネルは 12/28 で 2 周年を迎えました。あまりに忙しい時期はオムニバス的な感じでサボっているのですが、それ以外は基本毎日${fn("dailyreport")}更新しているのでよく継続していると思います。こちらも折を見て個人サイトにも再度転記していきます。`}

        <H3>オタク</H3>
        {p`今年視聴したアニメは以下の通りです。全体的に余裕がなく全然追えていません。来年は頑張ります。`}
        <Ul>
          <li>花咲くいろは</li>
          <li>たまこまーけっと</li>
          <li>花は咲く、修羅の如く（未遂）</li>
          <li>CITY（未遂）</li>
        </Ul>

        {p`コミックマーケットには夏コミ（C106）、冬コミ（C107）ともに参加しました。
          特に冬コミでは念願のサークル参加を果たし、かねてから興味があった文字・組版に関する同人誌を頒布しました。${<Anchor href="https://x.com/kyoto_inaniwa/status/2005558990672114129">事前のツイート</Anchor>}が伸びたこともあって当日は大盛況で、自作組版エンジンで同人誌を出して頒布して完売するという悲願を無事に達成することができました！！ ニッチなジャンルであるにも関わらず本当に感謝しかありません。このことは後日また記事にしたいと思います。`}

        <Figure>
          <div className="imgbox">
            <img src={c107_1} alt="「キロロとあずき」のサークルスペース" />
            <img src={c107_2} alt="同人誌「組版技術」" />
          </div>
          <figcaption>
            冬コミの様子。自分が書いた本が多くの人の手に渡る様子は感無量でした
          </figcaption>
        </Figure>

        <H3>ぬいぐるみ</H3>
        {p`今年もキロロ達と共に過ごした一年でした。キロロは今年のクリスマス・イブで我が家に来て 6 年目になります${fn("hatachi")}。`}
        {p`春に研究室の席替えをして引き出しを開けたところ、謎のぬいぐるみ（USJ のジュラシックパークのぬいぐるみっぽい）が座っていたので「ジュラくん」と名付けて机上に置いています。また、大阪万博に行った際は夢洲――の一つ手前、南港${fn("nanko")}まで再度赴いて万博ロゴぬいぐるみ（いのちのかがやきくん）${fn("myaku")}を連れてきました。加えて、帰路に友人と茶屋町のだるまで昼飲みをしながらキロロの画像検索をしたところ、eBay でそっくりなぬいぐるみが売られていたので即買いしました。タイから輸送され${fn("thai")}、日本語を話さずにポロ……とだけ喋っていたので名前はポロロになりました。`}
        <Figure>
          <div className="imgbox">
            <img src={nuigurumi1} alt="恐竜のぬいぐるみ" />
            <img src={nuigurumi2} alt="いのちのかがやき" />
          </div>
          <figcaption>はたらかないぬいぐるみたち</figcaption>
        </Figure>

        <H2>オムニバス</H2>
        <Ul>
          <li>
            常設展の終了前に未来館の「インターネット物理モデル」を見に行った
          </li>
          <li>美術展に行った</li>
          <li>オープンキャンパスに出た</li>
          <li>花見をした</li>
          <li>4 年ぶりにディズニー（8 年ぶりディズニーシー）に行った</li>
          <li>閉店間際の天一に地元の友人と行った</li>
          <li>ビアフェスに行った</li>
          <li>夏に 2 ヶ月間インターンに行った</li>
          <li>エレファントカシマシのライブビューイングを観に行った</li>
          <li>ふるさと納税でエナドリを貰った</li>
          <li>NISA に一日 1,500 円ずつ投資している</li>
          <li>情報系が集まる謎の BBQ に参加した（3 年目）</li>
        </Ul>

        <H2>むすびにかえて</H2>
        {p`この振り返りエントリも大学 1 年の年末に初めて、今年で 5 年目になります。今年の年末は無限に多忙で時間が割けず、あまり納得の行く総括ができなかったように感じます。もっとも、Web は後からでも更新できる点に優位性があるため、何かを思い返したらその都度更新していければよいだけの話です。`}
        {p`さて、2025 年、みなさんはどのような一年でしたか？ 私は全体を通じて何かに追われていたような一年でした。ただ、成すべきことが明確になっているのは悪いことではなく、毎日空虚な時間を持て余すよりはずっと良いことなのだとも思います。大学院では研究は大変ですが、実はそれ以外ではそれほどやることがない、という側面もあります。`}
        {p`最近考えていることとして、ある事象がキャッチーな言葉によって表されるようになると、人々の行動もその用語によって規定されてしまうのではないか？と仮説を立てています。例を一つ出すと、最近では冷笑という言葉が流行っていますが、こうした言葉が浸透してしまったばかりに、コミュニティ全体としてもそうした振る舞いに意図して近づこうとする現象が見られるということです。また、人生は選択の連続であるということを再認識した一年でもありました。つい短期的な視点で選択の成否を判断してしまうのですが、その真価は長期的に見てみないと分からないものだと思います。`}
        {p`来年はまた新しいことに挑戦していく一年になりそうです。なかなかハードな一年になりそうな気配がするのですが、身体を壊さないように気を付けつつ、最大限尽力していければと思います。`}
        {p`――大晦日も残すところ僅かとなりました。例年通り、中島みゆき「時代」の歌詞を引用して本エントリの結びに代えたいと思います。`}
        <Blockquote>
          まわるまわるよ時代はまわる 別れと出逢いを繰り返し
          <br />
          今日は倒れた旅人たちも 生まれ変わって歩き出すよ
          <br />
          時代 ／ 中島みゆき（1985）
        </Blockquote>
        {p`2026 年が始まります。どうぞ良いお年をお迎えください！！`}

        <H3>過去ログ</H3>
        <Ul>
          <li>
            <Anchor href="/articles/2024">2024 年を振り返って</Anchor>
          </li>
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
            <li id={`footnote${i + 1}`} key={i}>
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
