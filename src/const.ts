import { RANK, SUIT } from "./data/data.ts";

export const SUIT_MAPPER = {
  [SUIT.HEARTS]: "src/assets/heart.svg",
  [SUIT.DIAMONDS]: "src/assets/diamond.svg",
  [SUIT.CLUBS]: "src/assets/club.svg",
  [SUIT.SPADES]: "src/assets/spade.svg",
} as const;

export const RANK_ORDER = {
  [RANK.TWO]: 1,
  [RANK.THREE]: 2,
  [RANK.FOUR]: 3,
  [RANK.FIVE]: 4,
  [RANK.SIX]: 5,
  [RANK.SEVEN]: 6,
  [RANK.EIGHT]: 7,
  [RANK.NINE]: 8,
  [RANK.TEN]: 9,
  [RANK.JACK]: 10,
  [RANK.QUEEN]: 11,
  [RANK.KING]: 12,
  [RANK.ACE]: 13,
} as const;

export const SUIT_ORDER = {
  [SUIT.CLUBS]: 1,
  [SUIT.SPADES]: 2,
  [SUIT.HEARTS]: 3,
  [SUIT.DIAMONDS]: 4,
} as const;
