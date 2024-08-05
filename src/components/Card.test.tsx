import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { Card } from "./Card";
import { SUIT_MAPPER } from "../const";
import { RANK, SUIT } from "../data/data.ts";
import "@testing-library/jest-dom/vitest";

describe("Card Component", () => {
  const mockOnClick = vi.fn();
  const props = {
    suit: SUIT.HEARTS,
    rank: RANK.ACE,
    onClick: mockOnClick,
  };

  it("renders correctly with given props", () => {
    const { getByText, getByAltText } = render(<Card {...props} />);
    expect(getByText(RANK.ACE)).toBeInTheDocument();
    const image = getByAltText(`${SUIT.HEARTS} icon`) as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image.src).toContain(SUIT_MAPPER.Hearts);
  });

  it("applies custom styles", () => {
    const style = { backgroundColor: "red" };
    const { container } = render(<Card {...props} style={style} />);
    expect(container.firstChild).toHaveStyle(
      "background-color: rgb(255, 0, 0)",
    );
  });

  it("calls onClick with correct parameters", () => {
    const { getByText } = render(<Card {...props} />);
    fireEvent.click(getByText(RANK.ACE));
    expect(mockOnClick).toHaveBeenCalledWith({
      suit: SUIT.HEARTS,
      rank: RANK.ACE,
    });
  });
});
