import { describe, expect, it } from "vitest";
import { DeckOfCards } from "./card-operations.ts";
import { Card, CARDS, RANK, SUIT } from "../data/data.ts";
import { RANK_ORDER, SUIT_ORDER } from "../const.ts";

describe("card-operations", () => {
  it("should create a deck of cards", () => {
    const deck = new DeckOfCards();
    const cards = deck.listCards();

    expect(cards.length).toBe(52);

    // Check that all cards are present in the deck
    CARDS.forEach((expectedCard) => {
      const foundCard = cards.find(
        (card) =>
          card.rank === expectedCard.rank && card.suit === expectedCard.suit,
      );
      expect(foundCard).toBeDefined();
    });
  });

  it("should remove a card", () => {
    const deck = new DeckOfCards();
    const card = new Card(SUIT.HEARTS, RANK.TWO);

    deck.drawCard(card);

    const cards = deck.listCards();
    const drawnCard = cards.find(
      (_card) => _card.suit === card.suit && _card.rank === card.rank,
    );

    expect(drawnCard).toBeUndefined();
    expect(cards.length).toBe(51);
  });

  it("should shuffle the deck", () => {
    const deck = new DeckOfCards();

    deck.shuffleCards();

    const cards = deck.listCards();

    // Check that all cards are present in the deck
    CARDS.forEach((expectedCard) => {
      const foundCard = cards.find(
        (card) =>
          card.rank === expectedCard.rank && card.suit === expectedCard.suit,
      );
      expect(foundCard).toBeDefined();
    });
    expect(cards.length).toBe(52);
  });

  it("should sort the deck", () => {
    const deck = new DeckOfCards();
    deck.sortCards();
    const cards = deck.listCards();

    expect(cards.length).toBe(52);

    // Verify that the cards are in the correct order
    for (let index = 1; index < cards.length; index++) {
      const prevCard = cards[index - 1];
      const currentCard = cards[index];

      const prevSuitOrder = SUIT_ORDER[prevCard.suit];
      const currentSuitOrder = SUIT_ORDER[currentCard.suit];
      const prevRankOrder = RANK_ORDER[prevCard.rank];
      const currentRankOrder = RANK_ORDER[currentCard.rank];

      // Check suit order
      if (prevSuitOrder !== currentSuitOrder) {
        expect(prevSuitOrder).toBeLessThan(currentSuitOrder);
      } else {
        // Check rank order within the same suit
        expect(prevRankOrder).toBeLessThan(currentRankOrder);
      }
    }
  });

  it("should remove 3 cards and shuffle the deck", () => {
    const deck = new DeckOfCards();
    const drawnCards = [
      new Card(SUIT.HEARTS, RANK.TWO),
      new Card(SUIT.SPADES, RANK.THREE),
      new Card(SUIT.DIAMONDS, RANK.FOUR),
    ] as const;

    drawnCards.forEach((card) => deck.drawCard(card));

    deck.shuffleCards();

    const cards = deck.listCards();

    // Check that all cards are present in the deck except the drawn cards
    CARDS.forEach((expectedCard) => {
      const foundCard = cards.find(
        (card) =>
          card.rank === expectedCard.rank && card.suit === expectedCard.suit,
      );

      const isADrawnCard = drawnCards.find(
        (card) =>
          card.suit === expectedCard.suit && card.rank === expectedCard.rank,
      );

      if (isADrawnCard) {
        expect(foundCard).toBeUndefined();
      } else {
        expect(foundCard).toBeDefined();
      }
    });

    expect(cards.length).toBe(49);
  });

  it("should remove 3 cards and sort the deck", () => {
    const deck = new DeckOfCards();
    const drawnCards = [
      new Card(SUIT.HEARTS, RANK.TWO),
      new Card(SUIT.SPADES, RANK.THREE),
      new Card(SUIT.DIAMONDS, RANK.FOUR),
    ] as const;

    drawnCards.forEach((card) => deck.drawCard(card));

    deck.sortCards();

    const cards = deck.listCards();

    expect(cards.length).toBe(49);

    // Verify that the cards are in the correct order
    for (let index = 1; index < cards.length; index++) {
      const prevCard = cards[index - 1];
      const currentCard = cards[index];

      const prevSuitOrder = SUIT_ORDER[prevCard.suit];
      const currentSuitOrder = SUIT_ORDER[currentCard.suit];
      const prevRankOrder = RANK_ORDER[prevCard.rank];
      const currentRankOrder = RANK_ORDER[currentCard.rank];

      // Check suit order
      if (prevSuitOrder !== currentSuitOrder) {
        expect(prevSuitOrder).toBeLessThan(currentSuitOrder);
      } else {
        // Check rank order within the same suit
        expect(prevRankOrder).toBeLessThan(currentRankOrder);
      }
    }
  });
});
