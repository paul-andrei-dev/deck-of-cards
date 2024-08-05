import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App.tsx";
import { Card, RANK, SUIT } from "./data/data.ts";
import { DeckOfCards } from "./utils/card-operations.ts";

// Mock the DeckOfCards class
vi.mock("./utils/card-operations.ts");

describe("App component", () => {
  const mockedCards = [
    new Card(SUIT.HEARTS, RANK.ACE),
    new Card(SUIT.SPADES, RANK.ACE),
    new Card(SUIT.HEARTS, RANK.JACK),
  ];
  const deck = new DeckOfCards();
  const listCardsSpy = vi.spyOn(deck, "listCards").mockReturnValue(mockedCards);
  const shuffleCardsSpy = vi.spyOn(deck, "shuffleCards");
  const sortCardsSpy = vi.spyOn(deck, "sortCards");
  const drawCardSpy = vi.spyOn(deck, "drawCard");

  beforeEach(() => {
    // Create a new mocked instance of DeckOfCards
    // mockDeckOfCards = vi.mocked<DeckOfCards>;
    // mockDeckOfCards.prototype.listCards([
    //   { suit: "Hearts", rank: "A" },
    //   { suit: "Diamonds", rank: "2" },
    //   // Add more mock cards as needed
    // ]);
    // mockDeckOfCards.listCards.mockReturnValue([
    //   { suit: "Hearts", rank: "A" },
    //   { suit: "Diamonds", rank: "2" },
    //   // Add more mock cards as needed
    // ]);
  });

  it("renders the initial deck of cards and the buttons", () => {
    render(<App deckOfCards={deck} />);
    for (const mockCard of mockedCards) {
      const card = screen.getByTestId(`card-${mockCard.rank}-${mockCard.suit}`);
      expect(card).toBeInTheDocument();
    }

    expect(screen.getByText("shuffle deck")).toBeInTheDocument();
    expect(screen.getByText("sort deck")).toBeInTheDocument();
    expect(listCardsSpy).toBeCalled();
  });

  it("should call shuffleCards method when shuffle deck is clicked", () => {
    render(<App deckOfCards={deck} />);

    const shuffleButton = screen.getByText("shuffle deck");
    fireEvent.click(shuffleButton);

    expect(shuffleCardsSpy).toHaveBeenCalledTimes(1);
  });

  it("should call sortCards method when sort deck button is clicked", () => {
    render(<App deckOfCards={deck} />);

    const sortButton = screen.getByText("sort deck");
    fireEvent.click(sortButton);

    expect(sortCardsSpy).toHaveBeenCalledTimes(1);
  });

  it("should call drawCard method when a card is clicked", () => {
    render(<App deckOfCards={deck} />);

    const card = screen.getByTestId(`card-${RANK.ACE}-${SUIT.HEARTS}`);
    fireEvent.click(card);

    expect(drawCardSpy).toHaveBeenCalledWith({
      suit: SUIT.HEARTS,
      rank: RANK.ACE,
    });
    expect(drawCardSpy).toHaveBeenCalledTimes(1);
  });
});
