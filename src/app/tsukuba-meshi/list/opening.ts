import type { openedRestaurants } from "./content";

/* 曜日・時刻を表す一点を示す型 */
export type WeeklyTime = {
  // 0（日），1（月），2（火），3（水），4（木），5（金），6（土）
  day: number;
  hour: number;
  minute: number;
};

/* 特定の営業時間を示す型 */
type SpecificOpening = {
  type: "specific";
  periods: { from: WeeklyTime; to: WeeklyTime }[];
};

/* 24時間営業を示す型 */
type TwentyFourHoursOpening = {
  type: "24hours";
};

type Opening = SpecificOpening | TwentyFourHoursOpening;

export const openings: Record<keyof typeof openedRestaurants, Opening> = {
  "伝説のすた丼 @つくば大学店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  千里: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "喜元門 @研究学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  大将別館: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  天丼屋ふくすけ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  "川聚閣（せんしゅうかく）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  本部棟レストラン: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 0,
        },
      },
    ],
  },
  "松屋 @つくば東大通店": {
    type: "24hours",
  },
  "さん吉 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "ALPACA DINING": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "BANBAN @つくば学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 5,
          minute: 0,
        },
      },
    ],
  },
  "BANBAN @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 5,
          minute: 0,
        },
      },
    ],
  },
  "BBQ DAYS": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  Bettei: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "BAR DALI": {
    type: "specific",
    periods: [
      {
        from: {
          day: 2,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 4,
          minute: 0,
        },
      },
    ],
  },
  Engi: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  Guns: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 30,
        },
      },
    ],
  },
  "中華そば JUN-CHAN": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "カレーうどん ZEYO.": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 20,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 20,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 20,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 20,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 20,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 20,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 20,
        },
      },
    ],
  },
  cox: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 17,
          minute: 0,
        },
      },
    ],
  },
  "wine stand 43ponte": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  あさひや: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  あじよし: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  あじ彩: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  あっぱれ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  いっとく: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 45,
        },
      },
    ],
  },
  "えん弥 @東光台店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  "えん弥 @桜ニュータウン店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  おもてなし: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 4,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 4,
          minute: 0,
        },
      },
    ],
  },
  くぅべ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  "こおひいはうす らんぷ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 17,
          minute: 0,
        },
      },
    ],
  },
  ごう家: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "ごはん処 呑み処 ご褒美カロリ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "すき家 @つくば天久保店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 3,
          minute: 0,
        },
      },
    ],
  },
  "和創旬彩 たかぼ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "茨城地のもの わらやき料理 たたきの一九 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 15,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 15,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  だだ食堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 19,
          minute: 0,
        },
      },
    ],
  },
  ちゅら食堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
    ],
  },
  つくばワイナリー: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 13,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 13,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 13,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 13,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 13,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 17,
          minute: 0,
        },
      },
    ],
  },
  "つけそば 丸長": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
    ],
  },
  "とんかつとんQ @つくば本店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "とんかつとんQ @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  とんとこ豚: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  はなぶさ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "はま寿司 @つくば小野崎店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 5,
          minute: 0,
        },
      },
    ],
  },
  "はま寿司 @つくば研究学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  はりけんラーメン: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  ばほばほ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  "びすとろ椿々 cin‐cin": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  むじゃき: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  むらさき: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "焼酎天国 ゆず家": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  より味ち: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "らぁめん ゑびすや": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "らぁめん 喜乃壺（きのこ）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 15,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 15,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 15,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 15,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 15,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 15,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 15,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 15,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 15,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 15,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  らーめん三水: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 30,
        },
      },
    ],
  },
  わかたろう: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  アイマン: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  アポロ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "アリーズ・ケバブ: ケバブ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  イタメシヤBAFFI: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  ウエスト珈琲ハウス: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "オリーブの丘 @つくば研究学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  カドゥケウス: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 20,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 3,
          minute: 0,
        },
      },
    ],
  },
  "カフェ マルハバン": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 45,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  "カフェヨン: ハンバーグ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "カラオケ ボイス": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 5,
          minute: 0,
        },
      },
    ],
  },
  "カラオケまねきねこ @つくば店": {
    type: "24hours",
  },
  カリビアンカフェ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 3,
          minute: 0,
        },
      },
    ],
  },
  カンビオ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "ガスト @つくばテクノパーク桜店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  ガーリーショット: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  クラレット: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  クルーズ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  "ココス @つくば小野崎店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "ココス @テクノパーク桜店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "ココス @学園天久保店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "コメダ珈琲 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 6,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  コーヒーファクトリー: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "サイゼリヤ @つくば松代店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "サイゼリヤ @トナリエつくばスクエア店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "サブウェイ @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "サーティーワンアイスクリーム @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "ジュエル オブ インディア": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "ジョイフル @つくば桜店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  ジンギスカン喜羊羊: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "スシロー @つくば学園の森店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "スターバックスコーヒー @つくば研究学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "スターバックスコーヒー @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "スターバックスコーヒー @トナリエキュート つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "スターバックスコーヒー @筑波大学附属病院店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  ツインピークス: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 14,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 30,
        },
      },
    ],
  },
  "デニーズ @筑波学園都市店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 6,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 6,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  トタンコットンカフェ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 10,
          minute: 50,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 50,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 50,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 50,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
    ],
  },
  ドルフ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
    ],
  },
  ナマステキッチン: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 30,
        },
      },
    ],
  },
  ニューミラ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  ハイマウントJ: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "バケット @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "バーガーキング @トナリエクレオつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  ファッションラーメン大元: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 22,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 22,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 22,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 22,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 22,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 22,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 3,
          minute: 0,
        },
      },
    ],
  },
  フライパン: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "フライングガーデン: ハンバーグ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "ペッパーランチ @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  ホワイトバジル: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "マクドナルド @つくば学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "マクドナルド @つくば研究学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "マクドナルド @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "ミートシノワ: ハンバーグ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "メヒコ: シーフード料理": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "ラーメンショップ ○化 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  一太郎: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  一学食堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 30,
        },
      },
    ],
  },
  七福軒: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  三八: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  三浦飲食堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "丸亀製麺 @つくば研究学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "丸亀製麺 @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  丸源: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  九太郎: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  二学食堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 8,
          minute: 20,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 8,
          minute: 20,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 8,
          minute: 20,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 8,
          minute: 20,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 8,
          minute: 20,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 13,
          minute: 15,
        },
      },
    ],
  },
  仲々: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "ラーメン刻（とき）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  北方園: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 13,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  医学食堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "博多拉麺 一休": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "古民家バル たまり": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  "吉野家 @つくば天久保店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 9,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 4,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  "四十八漁場 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  夢屋: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 45,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 45,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 13,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "大学会館レストラン 筑波デミ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 30,
        },
      },
    ],
  },
  大成軒: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "大戸屋 @イーアスつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "天下一品 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "定食や ふくろう": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  寅とさくら: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "寛ぎ個室×ダイニング居酒屋 和楽 つくば": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  担々麺ロシュー: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
    ],
  },
  "日本橋太切りつけそば たぐり": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "旭川らあめん やまる": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "東京背脂 銀の豚": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "松のや @つくば東大通り店": {
    type: "24hours",
  },
  松乃家: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "松屋 @つくば西大通り店": {
    type: "24hours",
  },
  松屋製麺所: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 7,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 17,
          minute: 0,
        },
      },
    ],
  },
  楽蔵: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  油虎: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 20,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 20,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 20,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 20,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 20,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 20,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 20,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 20,
        },
      },
    ],
  },
  "活龍 @本店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "活龍大衆麺処 真壁屋": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "ラーメン清六家 @つくばキュート店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "ラーメン清六家 @筑波大学店": {
    type: "24hours",
  },
  "灯禾軒（とうかけん）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "焼きもの家 慶": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "焼肉・しゃぶしゃぶれんが亭": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  焼鳥ふくろう: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 30,
        },
      },
    ],
  },
  "熟成焼肉いちばん @つくば学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "牛角 @つくばテクノパーク桜店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "特級中華蕎麦 洋介 @天久保店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "特級鶏蕎麦 龍介 @テクノパーク桜店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "特級鶏蕎麦 龍介 @土浦学園通り店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "特製飯屋 Highway": {
    type: "specific",
    periods: [
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  "王道家直系 家系ラーメン がく": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 1,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 45,
        },
      },
    ],
  },
  甲殻堂: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  異国龍: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "百香亭 @本店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "百香亭 @筑波大学店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  福軒餃子: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 30,
        },
      },
    ],
  },
  第3エリア名店街: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  "日本国際学園大学 学生食堂": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  粉とクリーム: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 17,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 17,
          minute: 0,
        },
      },
    ],
  },
  純平: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 19,
          minute: 0,
        },
      },
    ],
  },
  "自家製麺 名無し": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "芛堂寺（いどうじ）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "薔薇絵亭: ロシア料理": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  蛇の目寿司: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  sois: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  誠寿司: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  論露に不二: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 30,
        },
      },
    ],
  },
  豚男爵: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  酒食みなき: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 30,
        },
      },
    ],
  },
  金の馬結: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "金治（きんじ）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "釜揚うどん店 あおやま": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  馬力ゃ和: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 2,
          minute: 0,
        },
      },
    ],
  },
  高麗: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  鬼者語: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 30,
        },
      },
    ],
  },
  魚八: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 13,
          minute: 40,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 19,
          minute: 45,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 40,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 19,
          minute: 45,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 40,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 40,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 40,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 19,
          minute: 45,
        },
      },
    ],
  },
  "鰻専門店 うなつく": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  鶏々: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "麺と酒 なないち": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "麺や 蒼 AOI": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  麺や松辰: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  麺八: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
    ],
  },
  麺処はいから: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 45,
        },
      },
    ],
  },
  麺屋とみよし: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
    ],
  },
  麺屋秀彬: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  麻辣十食: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  龍郎: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 45,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 45,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 45,
        },
      },
    ],
  },
  "俺の生きる道 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "横浜家系ラーメン 魂心家 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  "煮干中華ソバ イチカワ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  中華そばビート: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "味噌のジョー @つくば本店 ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "ゆきむら亭 つくば西店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 16,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 0,
        },
      },
    ],
  },
  "麺処 明り": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 45,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 45,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 45,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 45,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 45,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 45,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 15,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 45,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 45,
        },
      },
    ],
  },
  屋台ラーメン桜: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  麺や小五郎: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  ららららーめんや: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 5,
          minute: 0,
        },
      },
    ],
  },
  らーめんICHI: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 1,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 13,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 19,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 1,
          minute: 0,
        },
      },
    ],
  },
  "麺屋 湯火": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 10,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  豚飯坊屋: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
    ],
  },
  "かつ太郎本店 つくば学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "おそば 増田屋": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "つくば蕎麦物語 一成": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 15,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  桃ちゃん弁当: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  とんかつ弁当かつ大: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 0,
        },
      },
    ],
  },
  おふくろさん弁当: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "本格韓国料理 BabSang（バブサン）: 韓国料理": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "Spice curry TRIGGER": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  ストリートス: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  "kalak（カラク）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "韓国料理 炭火焼肉 ハンアリ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 13,
          minute: 50,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 13,
          minute: 50,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 13,
          minute: 50,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 13,
          minute: 50,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 13,
          minute: 50,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 13,
          minute: 50,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "焼肉 平城苑 つくば学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "串かつ でんがな BiViつくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 16,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 30,
        },
      },
    ],
  },
  "naked bar": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 3,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 18,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 3,
          minute: 0,
        },
      },
    ],
  },
  "東京バル GardenTerrace": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "しゃぶ葉 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  "びっくりドンキー @つくば中央店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "ばんどう太郎 @つくば学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "和食さと @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 0,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 0,
          minute: 0,
        },
      },
    ],
  },
  "モスバーガー @つくば中央店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 30,
        },
      },
    ],
  },
  "ケンタッキーフライドチキン @筑波学園店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 21,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 21,
          minute: 0,
        },
      },
    ],
  },
  "カレーハウス CoCo壱番屋 @つくば桜店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 23,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 23,
          minute: 30,
        },
      },
    ],
  },
  "moi!kka（モイッカ）": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 18,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 18,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 18,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 18,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "スターバックスコーヒー @筑波大学中央図書館店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 8,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "スぺシャルティコーヒー豆専門店 トライブ": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 19,
          minute: 0,
        },
      },
    ],
  },
  "自家焙煎珈琲 まめぽっと": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "SORA CAFE & COOKING ROOM": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 0,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 19,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 6,
          hour: 19,
          minute: 30,
        },
      },
    ],
  },
  SugayaCoffee: {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "カフェ クレマチス": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 0,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 1,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 20,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 6,
          hour: 17,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 20,
          minute: 0,
        },
      },
    ],
  },
  "N's cafe": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 12,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "千年一日珈琲焙煎所 Cafe": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 18,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 18,
          minute: 0,
        },
      },
    ],
  },
  "Rainbow cafe @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 19,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 19,
          minute: 0,
        },
      },
    ],
  },
  "コナズ珈琲 @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 10,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 22,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 9,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 22,
          minute: 0,
        },
      },
    ],
  },
  スープファクトリー: {
    type: "specific",
    periods: [
      {
        from: {
          day: 1,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 1,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 2,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 3,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 4,
          hour: 14,
          minute: 30,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 30,
        },
        to: {
          day: 5,
          hour: 14,
          minute: 30,
        },
      },
    ],
  },
  "カラオケレインボー @つくば店": {
    type: "specific",
    periods: [
      {
        from: {
          day: 0,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 1,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 1,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 2,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 2,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 3,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 3,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 4,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 4,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 5,
          hour: 2,
          minute: 0,
        },
      },
      {
        from: {
          day: 5,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 6,
          hour: 5,
          minute: 0,
        },
      },
      {
        from: {
          day: 6,
          hour: 11,
          minute: 0,
        },
        to: {
          day: 0,
          hour: 5,
          minute: 0,
        },
      },
    ],
  },
};
