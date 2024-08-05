import { Card, CARDS } from "../data/data.ts";
import { RANK_ORDER, SUIT_ORDER } from "../const.ts";

export class DeckOfCards {
  private cards: Card[];

  constructor() {
    this.cards = CARDS;
  }

  listCards() {
    return [...this.cards];
  }

  shuffleCards() {
    const shuffledCards = this.cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    this.cards.splice(0, this.cards.length);
    this.cards.push(...shuffledCards);
  }

  drawCard(cardToDraw: Card) {
    this.cards = this.cards.filter((_card) => {
      return _card.rank != cardToDraw.rank || _card.suit != cardToDraw.suit;
    });
  }

  sortCards() {
    this.cards.sort(
      (a, b) =>
        SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit] ||
        RANK_ORDER[a.rank] - RANK_ORDER[b.rank],
    );
  }
}
