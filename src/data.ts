export class Card {
  suit: ISuit;
  rank: IRank;

  constructor(suit: ISuit, rank: IRank) {
    this.suit = suit;
    this.rank = rank;
  }
}

export const SUIT = {
  HEARTS: "Hearts",
  DIAMONDS: "Diamonds",
  CLUBS: "Clubs",
  SPADES: "Spades",
} as const;

export type ISuit = (typeof SUIT)[keyof typeof SUIT];

export const RANK = {
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  TEN: "10",
  JACK: "Jack",
  QUEEN: "Queen",
  KING: "King",
  ACE: "Ace",
} as const;

export type IRank = (typeof RANK)[keyof typeof RANK];

export const CARDS: Card[] = [];

for (const suit of Object.values(SUIT)) {
  for (const rank of Object.values(RANK)) {
    CARDS.push(new Card(suit as ISuit, rank as IRank));
  }
}
