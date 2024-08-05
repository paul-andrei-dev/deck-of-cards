import { describe, expect, it } from "vitest";
import { Card, RANK, SUIT } from "./data.ts";

describe("data", () => {
  it("should create a card", () => {
    const card = new Card(SUIT.HEARTS, RANK.TWO);

    expect(card.suit).toEqual(SUIT.HEARTS);
    expect(card.rank).toEqual(RANK.TWO);
  });
});
