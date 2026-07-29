type OpenedRestaurant = {
  address: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  closed?: never;
};

type ClosedRestaurant = {
  closed: true;
  address?: string;
  mapsUrl?: string;
  lat?: number;
  lng?: number;
};

type UnknownRestaurant = {
  closed?: false;
  address?: string;
  mapsUrl?: string;
  lat?: number;
  lng?: number;
};

export type RestaurantContent =
  | OpenedRestaurant
  | ClosedRestaurant
  | UnknownRestaurant;

export const openedRestaurants = {
  "ALPACA DINING": {
    address: "天久保2丁目3–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ734OZXMMImARiwvt5QlBusE",
    lat: 36.0957362,
    lng: 140.1065732,
  },
  "BANBAN @つくば学園店": {
    address: "東新井19–5 つくばサンヨービル 2F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJm7sDx4gMImARIe0hh_oFKVI",
    lat: 36.0775038,
    lng: 140.11272,
  },
  "BANBAN @つくば店": {
    address: "春日4丁目1–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJmZrNjPQLImARtCNcflbcAH8",
    lat: 36.0953624,
    lng: 140.0970948,
  },
  "BBQ DAYS": {
    address: "吾妻1丁目7–1 トナリエつくばスクエア クレオ 屋上",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJ_2Mw3ENImARE4nkOTHvXIQ",
    lat: 36.0805457,
    lng: 140.1118547,
  },
  Bettei: {
    address: "天久保1丁目8–6 103",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJVUp_CnEMImAR4lqwmhyJQAo",
    lat: 36.0922298,
    lng: 140.1086209,
  },
  "BAR DALI": {
    address: "天久保3丁目15–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJV1IbbQYMImAR54XmtCYOHrg",
    lat: 36.107182,
    lng: 140.1052698,
  },
  Engi: {
    address: "吾妻1丁目10–1 つくばセンタービル 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJZSCgZCwNImARDQoMn5jH4p0",
    lat: 36.0821102,
    lng: 140.113959,
  },
  Guns: {
    address: "天久保2丁目6–26",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJUVbYgkwNImARPB3rYc4OI6Q",
    lat: 36.0978064,
    lng: 140.1062332,
  },
  "中華そば JUN-CHAN": {
    address: "竹園2丁目10–1 第4柴原ビル 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJnx5ZLvMMImARrxkxGahZAZw",
    lat: 36.0785685,
    lng: 140.1219559,
  },
  "カレーうどん ZEYO.": {
    address: "天久保2丁目6–1 ベストランドⅣ 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJqTB5XwsMImARm-aXNfHMpo8",
    lat: 36.0980832,
    lng: 140.1061328,
  },
  cox: {
    address: "小野崎448–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ2fUPooUMImARFY5sBxmSqE4",
    lat: 36.0736455,
    lng: 140.1099664,
  },
  "wine stand 43ponte": {
    address: "天久保3丁目21–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJB557qA8MImARUrx8roozexQ",
    lat: 36.1056078,
    lng: 140.1086399,
  },
  あさひや: {
    address: "天久保3丁目6–6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJyWzDC_gLImARUCrqxH8muuY",
    lat: 36.1049658,
    lng: 140.1006916,
  },
  あじよし: {
    address: "要290",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJq6p_rfkLImARakvxx2CQUV8",
    lat: 36.1047929,
    lng: 140.0982456,
  },
  あじ彩: {
    address: "天久保2丁目9–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJv-jK1gwMImARVsm9KUFlfPk",
    lat: 36.098248,
    lng: 140.1083036,
  },
  あっぱれ: {
    address: "竹園1丁目9–2 デイズタウン 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJby2VtI4MImAR2LJUHQGIIuE",
    lat: 36.0777564,
    lng: 140.1154714,
  },
  いっとく: {
    address: "苅間106–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJA3LCO38LImARt83WM2tcCf0",
    lat: 36.0734459,
    lng: 140.0968764,
  },
  "えん弥 @東光台店": {
    address: "遠東541–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJUX-RPdsJImARv1b2KyeGK3g",
    lat: 36.1026511,
    lng: 140.0641229,
  },
  "えん弥 @桜ニュータウン店": {
    address: "桜1丁目13–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJHy_UzwQMImARae62DWJfAj8",
    lat: 36.1109047,
    lng: 140.1107122,
  },
  おもてなし: {
    address: "天久保1丁目6–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJO8yhUXAMImARtPaBqyy3vAI",
    lat: 36.0910318,
    lng: 140.1091307,
  },
  くぅべ: {
    address: "上ノ室1662–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJGTIyYAANImARqQPY8n0V348",
    lat: 36.0850256,
    lng: 140.1403071,
  },
  "こおひいはうす らんぷ": {
    address: "天久保3丁目10–17",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJE9UbQwYMImARr-FCdx3r8ZI",
    lat: 36.1072908,
    lng: 140.1046357,
  },
  ごう家: {
    address: "天久保2丁目15–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJPbgTlnIMImARUM4AxpFsjFc",
    lat: 36.0974981,
    lng: 140.110277,
  },
  "ごはん処 呑み処 ご褒美カロリ": {
    address: "竹園1丁目9–7 林ビル 105",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJlzNJVOcNImARmi-LV4M1iQ0",
    lat: 36.078036,
    lng: 140.1145813,
  },
  "すき家 @つくば天久保店": {
    address: "天久保2丁目16–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJx384UxsNImARSAg8lfXRT0c",
    lat: 36.0974516,
    lng: 140.1109649,
  },
  "和創旬彩 たかぼ": {
    address: "桜3丁目8–4 アグレアーブル 104",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJOdEm2xsMImARWPhYPJDSuvo",
    lat: 36.1129746,
    lng: 140.1157722,
  },
  "茨城地のもの わらやき料理 たたきの一九 @つくば店": {
    address: "吾妻1丁目8–10 BiViつくば 3F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJkXYjYb0NImARCO2hAgoTyBM",
    lat: 36.08162009999999,
    lng: 140.1125829,
  },
  だだ食堂: {
    address: "流星台56–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ_5Nl69QNImARBL-2vQ6jSa8",
    lat: 36.0956743,
    lng: 140.1221836,
  },
  ちゅら食堂: {
    address: "栗原3839–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJyQ9u1APImAR8D_eKcjSOqQ",
    lat: 36.1156811,
    lng: 140.1064402,
  },
  つくばワイナリー: {
    address: "北条 字古城1162–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJMSY6M6wIImARKgYuvLdMNBY",
    lat: 36.1786338,
    lng: 140.0973998,
  },
  "つけそば 丸長": {
    address: "春日4丁目12–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJOyACDPULImARszkK_rH0LeE",
    lat: 36.096299,
    lng: 140.099343,
  },
  "とんかつとんQ @つくば本店": {
    address: "東新井13–12",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ16ASGIYMImARr9EcJzT4yiA",
    lat: 36.0770174,
    lng: 140.1106803,
  },
  "とんかつとんQ @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ0xQrWJQLImAR9iC-oc4A6rE",
    lat: 36.0863231,
    lng: 140.0844303,
  },
  とんとこ豚: {
    address: "天久保2丁目18–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJLc5K5W0MImARcstzgvsBxgQ",
    lat: 36.0954345,
    lng: 140.1118847,
  },
  はなぶさ: {
    address: "天久保1丁目6–15",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJxcE4WnAMImARcWdFBjdBVTA",
    lat: 36.0906832,
    lng: 140.1093192,
  },
  "はま寿司 @つくば小野崎店": {
    address: "小野崎字成田282–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ__-vRIAMImARl5fWu1g3ylg",
    lat: 36.0759729,
    lng: 140.1028225,
  },
  "はま寿司 @つくば研究学園店": {
    address: "学園の森2丁目1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJaY_bZMMLImAR-gLqLL-cB38",
    lat: 36.0925544,
    lng: 140.0756025,
  },
  はりけんラーメン: {
    address: "栗原2857–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJjyDonacOImARcbUANxWll4M",
    lat: 36.119219,
    lng: 140.1137443,
  },
  ばほばほ: {
    address: "天久保3丁目15–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJIUviFy0NImAR3sQBAP5h_c4",
    lat: 36.107344,
    lng: 140.1058119,
  },
  "びすとろ椿々 cin‐cin": {
    address: "天久保1丁目10–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJPcb7kHMMImARE5aPBGe7js4",
    lat: 36.0943925,
    lng: 140.1069585,
  },
  むじゃき: {
    address: "天久保2丁目10–19",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJgSTwZ_INImARqoRUfZOoDeY",
    lat: 36.0971253,
    lng: 140.1092342,
  },
  むらさき: {
    address: "吾妻1丁目8–10 BiViつくば 3F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJxQwN2m0NImAR4ZzoZUOVPxw",
    lat: 36.0817709,
    lng: 140.1130376,
  },
  "焼酎天国 ゆず家": {
    address: "吾妻3丁目8–1 吾妻ハイツ",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJLX59pHoMImARkm3uNsfbysA",
    lat: 36.0891107,
    lng: 140.1101442,
  },
  より味ち: {
    address: "春日4丁目15–19 春日アーバンハイツ",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJEQrXdQoMImARA9RJetX9zqk",
    lat: 36.09820089999999,
    lng: 140.1010792,
  },
  "らぁめん ゑびすや": {
    address: "春日4丁目26–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ5wsecAALImARZ7FJAhZWYhA",
    lat: 36.1030563,
    lng: 140.0989059,
  },
  "らぁめん 喜乃壺（きのこ）": {
    address: "稲岡728–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ2XM35x1zImARXarMWKBBbS4",
    lat: 36.0326827,
    lng: 140.140934,
  },
  らーめん三水: {
    address: "上横場らーめん三水",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJyWScTEELImARQ6GZe5Iahvo",
    lat: 36.0473053,
    lng: 140.084589,
  },
  わかたろう: {
    address: "天久保3丁目21–3 星谷ビル 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJAQAMqA8MImARWLUuTccl6pU",
    lat: 36.1054961,
    lng: 140.1087084,
  },
  アイマン: {
    address: "桜2丁目14–10",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ0WwYtpwNImARd7Ov7Us2wY0",
    lat: 36.1112212,
    lng: 140.1104886,
  },
  アポロ: {
    address: "竹園1丁目9–2 デイズタウン 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ6Zz0CdMNImARoor9X86bKWE",
    lat: 36.0779863,
    lng: 140.1147886,
  },
  "アリーズ・ケバブ: ケバブ": {
    address: "天久保2丁目6–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ_bybxwwMImARWf50bN1f324",
    lat: 36.0982607,
    lng: 140.1074175,
  },
  イタメシヤBAFFI: {
    address: "天久保1丁目16–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ8XlD6CMNImAR3kfSioFnhH8",
    lat: 36.0913853,
    lng: 140.1114705,
  },
  ウエスト珈琲ハウス: {
    address: "稲岡66–1 F区画",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJVVXFESJzImAR61bd_CEcxVg",
    lat: 36.036123,
    lng: 140.1362029,
  },
  "オリーブの丘 @つくば研究学園店": {
    address: "研究学園7丁目20–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJVVhTlnILImAR3vgIwutVn6o",
    lat: 36.0839778,
    lng: 140.0956763,
  },
  カドゥケウス: {
    address: "天久保1丁目10–18 リッチモンド1番街 202",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJEeh1OtsNImARYliTHHCQJM0",
    lat: 36.0941113,
    lng: 140.1085475,
  },
  "カフェ マルハバン": {
    address: "天王台1丁目1–1 第二エリア 2B棟 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ9Xq_fQAMImARHfYIJuT1Qvg",
    lat: 36.1112739,
    lng: 140.1013564,
  },
  "カフェヨン: ハンバーグ": {
    address: "春日4丁目16–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJa-xo_QkMImAROnt1U_Ds0CI",
    lat: 36.1000812,
    lng: 140.1009987,
  },
  "カラオケ ボイス": {
    address: "天久保1丁目7–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJdyNRdC0NImARV-8fI4mB3pQ",
    lat: 36.0914974,
    lng: 140.1084626,
  },
  "カラオケまねきねこ @つくば店": {
    address: "東新井37–1 2F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJYaeLA4ENImAR7GlxAKU8q-E",
    lat: 36.0735776,
    lng: 140.1166166,
  },
  カリビアンカフェ: {
    address: "竹園1丁目9–2 デイズタウンつくば B1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJby2VtI4MImARhSvdE79RIo8",
    lat: 36.077714,
    lng: 140.115331,
  },
  カンビオ: {
    address: "学園の森2丁目39–4 イストワール001号",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ36PRaN4LImARPY-hTOt6n_w",
    lat: 36.1006551,
    lng: 140.0790486,
  },
  "ガスト @つくばテクノパーク桜店": {
    address: "桜1丁目12–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ89G74QQMImARggBNTm1PcMs",
    lat: 36.110006,
    lng: 140.1096206,
  },
  ガーリーショット: {
    address: "天久保1丁目6–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJIVvcVnAMImARsuIFZiAs0cg",
    lat: 36.0909435,
    lng: 140.10877,
  },
  クラレット: {
    address: "天久保3丁目10–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJRTKsgcMImARVHLH-209Tso",
    lat: 36.1068013,
    lng: 140.1035072,
  },
  クルーズ: {
    address: "春日3丁目1–7 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJp-XFD4oLImARr4YbX2PQkY0",
    lat: 36.0908566,
    lng: 140.1003797,
  },
  "ココス @つくば小野崎店": {
    address: "小野崎字成田282–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJyetNWYAMImAR6M0EPE6NOxo",
    lat: 36.0761049,
    lng: 140.1032846,
  },
  "ココス @テクノパーク桜店": {
    address: "桜2丁目1–6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJFXbw7gQMImARbj23mcjYPX0",
    lat: 36.1105891,
    lng: 140.1094822,
  },
  "ココス @学園天久保店": {
    address: "天久保2丁目17–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJTVFrgXIMImARMUlhIMNLG8s",
    lat: 36.09691170000001,
    lng: 140.1110184,
  },
  "コメダ珈琲 @つくば店": {
    address: "小野崎129–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJlc5V04AMImARbMVJ9PlJIwY",
    lat: 36.0766237,
    lng: 140.1061088,
  },
  コーヒーファクトリー: {
    address: "千現2丁目13–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJe2__KscMImARC0uQbAG3Cgc",
    lat: 36.06275220000001,
    lng: 140.1239527,
  },
  "サイゼリヤ @つくば松代店": {
    address: "松代1丁目10–10",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ6QiGkH4LImAR4krWw9oJAS0",
    lat: 36.071567,
    lng: 140.097491,
  },
  "サイゼリヤ @トナリエつくばスクエア店": {
    address: "吾妻1丁目6–1 トナリエつくばスクエア キュート 3F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJudAiNX0MImARg9CN-BH1UV4",
    lat: 36.0820973,
    lng: 140.1111793,
  },
  "サブウェイ @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 3F フードコート内",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ-7kN8pQLImARxONU3GWvQGg",
    lat: 36.0866271,
    lng: 140.084506,
  },
  "サーティーワンアイスクリーム @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 3F フードコート内",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ2wN43pcLImAR-wwlavafKK4",
    lat: 36.0854577,
    lng: 140.0839199,
  },
  "ジュエル オブ インディア": {
    address: "天久保3丁目10–16 横田ハイツG棟",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJTeS5RAYMImARZGiRtf-RKr4",
    lat: 36.1072326,
    lng: 140.1044288,
  },
  "ジョイフル @つくば桜店": {
    address: "桜1丁目14番地3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJMyRrFhsMImARq_wLwfS8Mk0",
    lat: 36.1120919,
    lng: 140.1126699,
  },
  ジンギスカン喜羊羊: {
    address: "天久保3丁目15–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJ2IUQDcNImARpGcpwKgyDe8",
    lat: 36.107344,
    lng: 140.1058119,
  },
  "スシロー @つくば学園の森店": {
    address: "学園の森3丁目1–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJqacvn5MLImARhKnbH6uziRA",
    lat: 36.086888,
    lng: 140.0868039,
  },
  "スターバックスコーヒー @つくば研究学園店": {
    address: "学園南3丁目20–6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJe0Z9fp4LImAR7apoIgCyAJQ",
    lat: 36.07262619999999,
    lng: 140.0852109,
  },
  "スターバックスコーヒー @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ9e4L7pQLImARqpTpXnx88s0",
    lat: 36.0870298,
    lng: 140.0843878,
  },
  "スターバックスコーヒー @トナリエキュート つくば店": {
    address: "吾妻1丁目6–1 トナリエつくばスクエア キュート 2F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJoxZAsWIMImARckqgbmU1shk",
    lat: 36.0819312,
    lng: 140.11142,
  },
  "スターバックスコーヒー @筑波大学附属病院店": {
    address: "天久保2丁目1–18 付属病院 桐の葉モール",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ17MQvTANImAR_WWh24apCT8",
    lat: 36.0922081,
    lng: 140.1013362,
  },
  ツインピークス: {
    address: "東新井18–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJX7Yd23oNImAR_u94Fwhx4LE",
    lat: 36.0780338,
    lng: 140.1122735,
  },
  "デニーズ @筑波学園都市店": {
    address: "春日2丁目7–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJdfk4RHkMImARx-TPYI-9TUw",
    lat: 36.083715,
    lng: 140.1052392,
  },
  トタンコットンカフェ: {
    address: "天久保4丁目5–17",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJowrjNA8MImARmsDue3QknJo",
    lat: 36.1064314,
    lng: 140.1114532,
  },
  ドルフ: {
    address: "天久保3丁目8-6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJn-v-hwgMImAR0HDMe9AhslM",
    lat: 36.1046161,
    lng: 140.1035558,
  },
  ナマステキッチン: {
    address: "天久保1丁目10–4 ジョイプラザ天久保",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ12KFmOsNImARsDgj4hZr0MQ",
    lat: 36.0942024,
    lng: 140.1074004,
  },
  ニューミラ: {
    address: "天久保2丁目16–10 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ3ceTUg0MImAR91etixfjqF0",
    lat: 36.098948,
    lng: 140.110656,
  },
  ハイマウントJ: {
    address: "筑穂1丁目13–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJa1xyEQAJImARKCpQJowsAO4",
    lat: 36.1352597,
    lng: 140.0849234,
  },
  "バケット @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJBQYe7pQLImARCucMetBlC-0",
    lat: 36.0867902,
    lng: 140.0842988,
  },
  "バーガーキング @トナリエクレオつくば店": {
    address: "吾妻1丁目7–1 トナリエつくばスクエア クレオ 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJCVmBjkcNImARoWRQGa5rZQo",
    lat: 36.0808286,
    lng: 140.1117491,
  },
  ファッションラーメン大元: {
    address: "天久保1丁目6–15",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJxcE4WnAMImARxGBlMcvqQec",
    lat: 36.0907565,
    lng: 140.1092524,
  },
  フライパン: {
    address: "春日4丁目3–22",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJZzg3O_ULImARoz7A2KIcD64",
    lat: 36.0950073,
    lng: 140.0990849,
  },
  "フライングガーデン: ハンバーグ": {
    address: "西平塚332–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJo4cBreULImARuCEY2Mour-0",
    lat: 36.1009925,
    lng: 140.0875748,
  },
  "ペッパーランチ @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 3F フードコート内",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJN2QI8ZQLImARmz8jQM7YNQg",
    lat: 36.0861628,
    lng: 140.0841802,
  },
  ホワイトバジル: {
    address: "桜2丁目51–5 皆葉ビル",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJa20-dxsMImAR_iTut6_LtW8",
    lat: 36.1131312,
    lng: 140.1136096,
  },
  "マクドナルド @つくば学園店": {
    address: "小野崎 字千駄苅293–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJRcGk9YAMImARIW95-mQ-OQ8",
    lat: 36.0764184,
    lng: 140.1036393,
  },
  "マクドナルド @つくば研究学園店": {
    address: "研究学園4丁目1–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJH8NBZpYLImARHSXDXAT5IpU",
    lat: 36.0855406,
    lng: 140.0749284,
  },
  "マクドナルド @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 3F フードコート内",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJSX1M85QLImAR6ZhaMNEWpXU",
    lat: 36.0865428,
    lng: 140.0843481,
  },
  "ミートシノワ: ハンバーグ": {
    address: "研究学園5丁目19 イーアスつくば 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJNViwhmkLImAROx1hTj5NQtU",
    lat: 36.08653520000001,
    lng: 140.084433,
  },
  "メヒコ: シーフード料理": {
    address: "大曽根3362",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJPdCJmCEJImARZkluCCCCK60",
    lat: 36.1391186,
    lng: 140.0824746,
  },
  "ラーメンショップ ○化 @つくば店": {
    address: "妻木1766–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJYUh5SQANImARI4YqWDeZwJw",
    lat: 36.1089469,
    lng: 140.1080974,
  },
  一太郎: {
    address: "天久保2丁目6–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJqTB5XwsMImARAcnn82IxaLU",
    lat: 36.0980123,
    lng: 140.1060757,
  },
  一学食堂: {
    address: "天王台1丁目1–1 1A棟",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ82iAGQEMImAR0h76_07wkek",
    lat: 36.1082132,
    lng: 140.102703,
  },
  七福軒: {
    address: "天久保1丁目6–14",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJF6oTRnAMImARGIoaNU29AaE",
    lat: 36.0909518,
    lng: 140.1096786,
  },
  三八: {
    address: "天久保3丁目11–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ3X8sNAANImARakT0qChr5Nw",
    lat: 36.1064172,
    lng: 140.1033814,
  },
  三浦飲食堂: {
    address: "吾妻1丁目5",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJkyjHg4gMImARTlcpDLEcAR8",
    lat: 36.0808853,
    lng: 140.1112564,
  },
  "丸亀製麺 @つくば研究学園店": {
    address: "研究学園3丁目1–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJNy1V02IMImARge0xK08QVSw",
    lat: 36.0859667,
    lng: 140.0742426,
  },
  "丸亀製麺 @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 3F フードコート内",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJcx9g8RQLImARBYRFykL3_74",
    lat: 36.0854577,
    lng: 140.0839199,
  },
  丸源: {
    address: "小野崎282–6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJD9j0S4AMImARGSmkBzQiYoA",
    lat: 36.0752585,
    lng: 140.1026113,
  },
  九太郎: {
    address: "竹園1丁目9–2 デイズタウン B1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJby2VtI4MImARzPcDNg5Ipgs",
    lat: 36.0776842,
    lng: 140.1153565,
  },
  二学食堂: {
    address: "天王台1丁目1–1 2B棟",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ82iAGQEMImARd4TX4PQ3CQ4",
    lat: 36.1108872,
    lng: 140.1012814,
  },
  仲々: {
    address: "春日4丁目20–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJgVvt9fYLImARgcK0E24cyoY",
    lat: 36.0999521,
    lng: 140.0984172,
  },
  "伝説のすた丼 @つくば大学店": {
    address: "天久保2丁目2–4 サンライズビル 102号室",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJAQCDnnMMImAR4vOSBw4u5f8",
    lat: 36.094968,
    lng: 140.1071059,
  },
  "ラーメン刻（とき）": {
    address: "天久保2丁目3–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJw0CPAQANImARduzeucvFKp4",
    lat: 36.0957082,
    lng: 140.1066111,
  },
  北方園: {
    address: "天久保1丁目10–18 リッチモンド1番街 206",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJbC0XXMMImARpzzrHMKWeGY",
    lat: 36.0941344,
    lng: 140.1085256,
  },
  医学食堂: {
    address: "天久保2丁目1–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJWYJLrnUMImARiGsHapgQ8eg",
    lat: 36.09318349999999,
    lng: 140.103246,
  },
  千里: {
    address: "吾妻3丁目13–9 1F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJYQ25XccNImARehGFjnv2tWA",
    lat: 36.0896379,
    lng: 140.1122487,
  },
  "博多拉麺 一休": {
    address: "桜2丁目1–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJDcB0-gQMImARXB33JxCN62k",
    lat: 36.1102148,
    lng: 140.1090845,
  },
  "古民家バル たまり": {
    address: "吾妻3丁目7–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ40EE2LcNImARrMsRQLti4T4",
    lat: 36.0885443,
    lng: 140.1114095,
  },
  "吉野家 @つくば天久保店": {
    address: "天久保2丁目15–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJXeM4SA0MImARGivNR5S7jj4",
    lat: 36.0991603,
    lng: 140.1100748,
  },
  "喜元門 @研究学園店": {
    address: "研究学園5丁目6–6 D12ビル 101号",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJbXotk5ULImAR_qHvmFCJOYo",
    lat: 36.0836805,
    lng: 140.0812438,
  },
  "四十八漁場 @つくば店": {
    address: "吾妻1丁目5–3 トナリエつくばスクエア MOG 3F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJxdxf9gMNImARxeFBVHb4H6c",
    lat: 36.0813695,
    lng: 140.1113613,
  },
  夢屋: {
    address: "春日4丁目4–5",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJERCsSPQLImARtA1ohsZSWJY",
    lat: 36.0968795,
    lng: 140.0977524,
  },
  "大学会館レストラン 筑波デミ": {
    address: "天久保3丁目1 大学会館",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJxdeb5wcMImARpVHGQrfviD0",
    lat: 36.105099,
    lng: 140.1021777,
  },
  大将別館: {
    address: "竹園2丁目7–20",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJL0ZL9owMImARPkXt4_i--Es",
    lat: 36.0777099,
    lng: 140.119067,
  },
  大成軒: {
    address: "天久保1丁目7–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJERQsq3EMImARcLRG9jb7jU8",
    lat: 36.0912303,
    lng: 140.1088942,
  },
  "大戸屋 @イーアスつくば店": {
    address: "研究学園5丁目19 イーアスつくば 3F フードコート内",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ-aCn85QLImARQBRks2OOHWI",
    lat: 36.0862086,
    lng: 140.0839277,
  },
  "天下一品 @つくば店": {
    address: "小野崎281–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ3bt5X2UNImARjpHU5qc4BIY",
    lat: 36.0757294,
    lng: 140.1036232,
  },
  天丼屋ふくすけ: {
    address: "柴崎1050–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJz_-OUhYMImARArcPklOpnFM",
    lat: 36.1091376,
    lng: 140.1195377,
  },
  "定食や ふくろう": {
    address: "天久保3丁目10–11",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJCZjZTQYMImARxueV4OMXUgE",
    lat: 36.1069492,
    lng: 140.1037653,
  },
  寅とさくら: {
    address: "天久保2丁目11–10",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ4daX8nIMImARoo9xh4d_oRY",
    lat: 36.0967628,
    lng: 140.1099582,
  },
  "寛ぎ個室×ダイニング居酒屋 和楽 つくば": {
    address: "天久保1丁目6–11",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJt7wizXsNImARUSp3XbKYZb4",
    lat: 36.0912694,
    lng: 140.1102298,
  },
  "川聚閣（せんしゅうかく）": {
    address: "天久保2丁目4–22",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJsdiFFdkNImARdnoRLk0dH8M",
    lat: 36.0961798,
    lng: 140.1065265,
  },
  担々麺ロシュー: {
    address: "天久保2丁目10–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJRWwfVAANImARECICYKL6ZeE",
    lat: 36.0974721,
    lng: 140.1081739,
  },
  "日本橋太切りつけそば たぐり": {
    address: "大角豆2012–930",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJWwNeABzImARhuUhrXWUO5Y",
    lat: 36.0539399,
    lng: 140.1466508,
  },
  "旭川らあめん やまる": {
    address: "竹園2丁目4–10 103号",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJrTm2aaQNImAR1YaufcTtJcA",
    lat: 36.0787873,
    lng: 140.1201258,
  },
  本部棟レストラン: {
    address: "天王台1丁目1–1 本部棟",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJF9rXPQEMImARPxjpwht943M",
    lat: 36.1116034,
    lng: 140.1038126,
  },
  "東京背脂 銀の豚": {
    address: "妻木1766–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJHQsYrgUMImARHwnqxeP674c",
    lat: 36.1089789,
    lng: 140.1080126,
  },
  "松のや @つくば東大通り店": {
    address: "天久保4丁目6–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ09Ohow8MImARQmzneCoUUgI",
    lat: 36.106049,
    lng: 140.109192,
  },
  松乃家: {
    address: "妻木5–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJq6qqqgUMImARsNuZt3rVSL8",
    lat: 36.108734,
    lng: 140.1077582,
  },
  "松屋 @つくば東大通店": {
    address: "妻木1768–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJhYI_SwQMImARR6LCTHlv30o",
    lat: 36.10922,
    lng: 140.107556,
  },
  "松屋 @つくば西大通り店": {
    address: "春日4丁目1–5",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJuVas6fQLImAR8xDoNahEOJQ",
    lat: 36.094904,
    lng: 140.097591,
  },
  松屋製麺所: {
    address: "沼田300番地",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ0y_FYV0GImARUw5mXev3ZSQ",
    lat: 36.2071691,
    lng: 140.0803463,
  },
  楽蔵: {
    address: "天久保3丁目15–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJedVhcQYMImARptgKw5-d_sc",
    lat: 36.107471,
    lng: 140.1056808,
  },
  油虎: {
    address: "筑穂1丁目1–13 KMS-S 3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJSTrbGCIJImARczKG7Q7M4UY",
    lat: 36.1372839,
    lng: 140.0815889,
  },
  "活龍 @本店": {
    address: "筑穂1丁目10–27",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ_fq--CIJImARK1vLEY42FSA",
    lat: 36.1357199,
    lng: 140.0825608,
  },
  "活龍大衆麺処 真壁屋": {
    address: "天久保2丁目6–26",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJbQ5lwRsNImARli6vuSbpygo",
    lat: 36.0979477,
    lng: 140.1062348,
  },
  "ラーメン清六家 @つくばキュート店": {
    address: "吾妻1丁目6–1 トナリエつくばスクエア キュート 3F",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJjeHeER8NImAReXPLjGhQwoY",
    lat: 36.0821914,
    lng: 140.1112168,
  },
  "ラーメン清六家 @筑波大学店": {
    address: "天久保3丁目4–8",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJSf81e_gLImARgHoet5wJ46c",
    lat: 36.1058372,
    lng: 140.1003474,
  },
  "灯禾軒（とうかけん）": {
    address: "天久保3丁目15–45",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJJSp6dAYMImARoRVPUqMJIDc",
    lat: 36.1073763,
    lng: 140.1057378,
  },
  "焼きもの家 慶": {
    address: "天久保1丁目6–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJV8S9SHAMImART-lXVMlCGQI",
    lat: 36.0911204,
    lng: 140.1098499,
  },
  "焼肉・しゃぶしゃぶれんが亭": {
    address: "春日4丁目1–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJcTtjdvQLImARXVKHypTQUSc",
    lat: 36.0961454,
    lng: 140.095998,
  },
  焼鳥ふくろう: {
    address: "天久保1丁目6–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJfcK-SHAMImARmEgX2LhfUA8",
    lat: 36.09111499999999,
    lng: 140.1098611,
  },
  "熟成焼肉いちばん @つくば学園店": {
    address: "東新井17",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJgR0xhogMImARPdFob1DYvZU",
    lat: 36.0785355,
    lng: 140.111876,
  },
  "牛角 @つくばテクノパーク桜店": {
    address: "柴崎16ｰ4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJFRmwVgQMImAR67iJSqCL3NU",
    lat: 36.109691,
    lng: 140.1084682,
  },
  "特級中華蕎麦 洋介 @天久保店": {
    address: "上横場244–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJbZVbReALImARoFC35fBqwSk",
    lat: 36.0529489,
    lng: 140.0845842,
  },
  "特級鶏蕎麦 龍介 @テクノパーク桜店": {
    address: "桜1丁目23–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJe3wXKgANImARrf6lAhUzOCg",
    lat: 36.1128281,
    lng: 140.1153177,
  },
  "特級鶏蕎麦 龍介 @土浦学園通り店": {
    address: "土浦市粕毛109–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJrWijcQANImARsIrrljsGSYA",
    lat: 36.085216,
    lng: 140.1705101,
  },
  "特製飯屋 Highway": {
    address: "天久保2丁目9–2 B-201",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJnY3AKyUNImARcoOKih5OkIk",
    lat: 36.09836420000001,
    lng: 140.1082359,
  },
  "王道家直系 家系ラーメン がく": {
    address: "学園の森2丁目20–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJicnzZZwLImARUy9dFAqQezM",
    lat: 36.0985996,
    lng: 140.0813434,
  },
  甲殻堂: {
    address: "筑穂1丁目10–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ3_NS_yIJImARDh4cpFywgpE",
    lat: 36.1358233,
    lng: 140.0827783,
  },
  異国龍: {
    address: "天久保2丁目20–7 レガート ホソダ 103号",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJQX5tl9INImARnhyMF0X_A5Q",
    lat: 36.0972995,
    lng: 140.1121955,
  },
  "百香亭 @本店": {
    address: "東平塚894–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJFUbAx_ELImARyeX-BggsXnA",
    lat: 36.0975371,
    lng: 140.0918137,
  },
  "百香亭 @筑波大学店": {
    address: "天久保3丁目15–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJkdsjbAYMImARljpn8zDafIM",
    lat: 36.1072017,
    lng: 140.1052494,
  },
  福軒餃子: {
    address: "天久保3丁目11–18",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJL53vmbgNImARmeA-N46jQjg",
    lat: 36.1063869,
    lng: 140.103346,
  },
  第3エリア名店街: {
    address: "天王台1丁目1丁目1–1 3A棟",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJPeYvw-QLImARhCp0NiNlvvM",
    lat: 36.110256,
    lng: 140.1009359,
  },
  "日本国際学園大学 学生食堂": {
    address: "吾妻3丁目1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJrzh7E8MNImARlw80rIo06pU",
    lat: 36.0886936,
    lng: 140.1073809,
  },
  粉とクリーム: {
    address: "天王台1丁目1–1 3A棟",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ82iAGQEMImARKLFCP2g7Am8",
    lat: 36.1102647,
    lng: 140.1010052,
  },
  純平: {
    address: "天久保1丁目10–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJS9fCvXMMImARWVo9sd84WKw",
    lat: 36.0944454,
    lng: 140.107434,
  },
  "自家製麺 名無し": {
    address: "北条4093",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ9SAYhrMIImARtDE8AZRO5WI",
    lat: 36.1718528,
    lng: 140.09783,
  },
  "芛堂寺（いどうじ）": {
    address: "天久保2丁目6–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJtUQhSgENImARCKsvbD7LlBk",
    lat: 36.0980626,
    lng: 140.1061362,
  },
  "薔薇絵亭: ロシア料理": {
    address: "天久保2丁目7–22",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJDwbDwAwMImARkSkdxriirfQ",
    lat: 36.09850369999999,
    lng: 140.107511,
  },
  蛇の目寿司: {
    address: "天久保3丁目15–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJkdsjbAYMImAR5kk32uDRcvI",
    lat: 36.1071642,
    lng: 140.1052799,
  },
  sois: {
    address: "稲敷郡阿見町本郷3丁目2–13",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJRSpWfE9zImARcF23VzGzBZs",
    lat: 36.0243164,
    lng: 140.1752066,
  },
  誠寿司: {
    address: "春日4丁目12–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJOyACDPULImAROJRqkSjbTUM",
    lat: 36.0962213,
    lng: 140.0992642,
  },
  論露に不二: {
    address: "坂東市矢作3083–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ0bIlsd2jGGARyr5f3L7B8ZM",
    lat: 35.9897958,
    lng: 139.8986294,
  },
  豚男爵: {
    address: "遠東1371–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ__8ji3wJImARcLflsITuGsg",
    lat: 36.1035769,
    lng: 140.0677382,
  },
  酒食みなき: {
    address: "春日4丁目12–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ51D-C_ULImAR6uRFCs7nK0U",
    lat: 36.0961798,
    lng: 140.0991563,
  },
  金の馬結: {
    address: "天久保2丁目15–7",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJBT-z8okNImARy4KhZF5Rvf8",
    lat: 36.0974545,
    lng: 140.1101898,
  },
  "金治（きんじ）": {
    address: "天久保3丁目6–6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJkRaUC_gLImAR7kzRDeLpv5U",
    lat: 36.1049265,
    lng: 140.1007441,
  },
  "釜揚うどん店 あおやま": {
    address: "北条186–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ3xHX464IImARI9-9bEPpBQY",
    lat: 36.177606,
    lng: 140.093441,
  },
  馬力ゃ和: {
    address: "天久保1丁目8–3 グリーン天久保",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJr8KZCnEMImARFkC_7sC1i4M",
    lat: 36.0922287,
    lng: 140.1085709,
  },
  高麗: {
    address: "春日4丁目21–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJD-sW__YLImARmLI5vx0uTI8",
    lat: 36.1006069,
    lng: 140.0983261,
  },
  鬼者語: {
    address: "榎戸685–5",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJmS_1_1ULImARbSBKEc2QKw8",
    lat: 36.0444846,
    lng: 140.1009446,
  },
  魚八: {
    address: "花畑1丁目15–3",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJqdP1nTkJImARacMPciTKPfw",
    lat: 36.1303286,
    lng: 140.0880755,
  },
  "鰻専門店 うなつく": {
    address: "竹園2丁目6–1 F号室",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJhw3_V7UNImARSFe9IXfFsgY",
    lat: 36.0787116,
    lng: 140.1183234,
  },
  鶏々: {
    address: "天久保2丁目11–10",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ4daX8nIMImAR7-IoM1SlMuQ",
    lat: 36.09678050000001,
    lng: 140.1098771,
  },
  "麺と酒 なないち": {
    address: "天久保3丁目15–4",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJY1KSDMgNImAR0-nqjdENsLo",
    lat: 36.107344,
    lng: 140.1058119,
  },
  "麺や 蒼 AOI": {
    address: "竹園2丁目6–10",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ7x1paIwMImARjKStiBVncH8",
    lat: 36.077894,
    lng: 140.1182327,
  },
  麺や松辰: {
    address: "上郷1435–2",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJncGFL3AMImARPGkxqbeY91o",
    lat: 36.1100485,
    lng: 140.0167598,
  },
  麺八: {
    address: "大曽根3836",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJnUkjxhgJImAR7bwoTcNNSZc",
    lat: 36.1360115,
    lng: 140.0789226,
  },
  麺処はいから: {
    address: "花室732",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ9_Im5lgMImAR9jJvXIQ-lLE",
    lat: 36.0891683,
    lng: 140.1282135,
  },
  麺屋とみよし: {
    address: "天久保1丁目16–7 さくらビル 3 2E",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJV7iefy0NImARI4nknoTQ53A",
    lat: 36.0914149,
    lng: 140.1114643,
  },
  麺屋秀彬: {
    address: "天久保3丁目6–6",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ7z4XKbcLImARqcsH6YtLV5E",
    lat: 36.1050176,
    lng: 140.1007512,
  },
  麻辣十食: {
    address: "天久保1丁目6–15 細田ビル D101",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ58MnWPn_IWAR4rhr8G8QKIs",
    lat: 36.090646,
    lng: 140.1092273,
  },
  龍郎: {
    address: "吾妻3丁目8–1",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ5WSkpnoMImARC_IKhTydYA8",
    lat: 36.0891525,
    lng: 140.1103101,
  },
} as const satisfies Record<string, OpenedRestaurant>;

export const closedRestaurants = {
  RanRan: { closed: true },
  "WIKIWIKI: ハンバーガ": { closed: true },
  "エルトリート @つくば学園店: メキシコ料理": { closed: true },
  コスモス: { closed: true },
  "ビッグエコー @つくば天久保店（モナコ店）": { closed: true },
  伊助: { closed: true },
  俺の生きる道W: { closed: true },
  "和の国 KAGUYA RAMEN": { closed: true },
  "大戸屋 @大戸屋 BiViつくば店": { closed: true },
  新世界: { closed: true },
  春日食堂: { closed: true },
  松屋食堂: { closed: true },
  盛清六: {
    address: "天久保2丁目9–2 リッチモンド 2番街 104",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJ7ejK1gwMImARyxKVcUOBHQQ",
    lat: 36.0982154,
    lng: 140.1084146,
    closed: true,
  },
  茶の木村園: { closed: true },
  "貝出汁 まぜそば 虎巴徠": { closed: true },
  銀のしずく: { closed: true },
  "鬼屋 @つくば本店": { closed: true },
  "麺 The Tokyo": { closed: true },
  "麺屋 必道": { closed: true },
  麺屋とどろき: { closed: true },
  "めしや 益さん": { closed: true },
  れいちゃんの食小屋: { closed: true },
  "活龍 @竹園店": {
    address: "竹園1丁目9–7",
    closed: true,
  },
  "魚べい @つくば研究学園店": {
    address: "研究学園5丁目18–10",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJlxnmTpELImARu-N38mvPd3k",
    lat: 36.0836183,
    lng: 140.0859947,
    closed: true,
  },
  アヤカリ亭: { closed: true },
} as const satisfies Record<string, ClosedRestaurant>;

export const unknownRestaurants = {
  "俺の生きる道 @つくば店": {},
  "横浜家系ラーメン 魂心家 @つくば店": {},
  "煮干中華ソバ イチカワ": {},
  "中華そば 騰匠俐": {},
  中華そばビート: {},
  "味噌のジョー @つくば本店 ": {},
  "ゆきむら亭 つくば西店": {},
  "麺処 明り": {},
  屋台ラーメン桜: {},
  麺や小五郎: {},
  ららららーめんや: {},
  らーめんICHI: {},
  "麺屋 湯火": {},
  豚飯坊屋: {},
  "かつ太郎本店 つくば学園店": {},
  "おそば 増田屋": {},
  "つくば蕎麦物語 一成": {},
  桃ちゃん弁当: {},
  とんかつ弁当かつ大: {},
  おふくろさん弁当: {},
  "本格韓国料理 BabSang（バブサン）: 韓国料理": {},
  "Spice curry TRIGGER": {},
  ストリートス: {},
  "kalak（カラク）": {},
  "韓国料理 炭火焼肉 ハンアリ": {},
  "焼肉 平城苑 つくば学園店": {},
  "串かつ でんがな BiViつくば店": {},
  "naked bar": {},
  "東京バル GardenTerrace": {},
  "しゃぶ葉 つくば店": {},
  "びっくりドンキー @つくば中央店": {},
  ばんどう太郎つくば学園店: {},
  "和食さと つくば店": {},
  "モスバーガー @つくば中央店": {},
  "ケンタッキーフライドチキン @筑波学園店": {},
  "カレーハウス CoCo壱番屋 @つくば桜店": {},
  "moi!kka（モイッカ）": {},
  "スターバックスコーヒー @筑波大学中央図書館店": {},
  "スぺシャルティコーヒー豆専門店 トライブ": {},
  "豆ぽっ自家焙煎珈琲 まめぽっと": {},
  "SORA CAFE & COOKING ROOM": {},
  SugayaCoffee: {},
  "カフェ クレマチス": {},
  "N's cafe": {},
  "千年一日珈琲焙煎所 Cafe": {},
  "Rainbow cafe @つくば店": {},
  "コナズ珈琲 つくば店": {},
  スープファクトリー: {},
  "カラオケレインボー @つくば店": {},
} as const satisfies Record<string, UnknownRestaurant>;

export const restaurantContents = {
  ...openedRestaurants,
  ...closedRestaurants,
  ...unknownRestaurants,
};
