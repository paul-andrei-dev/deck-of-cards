import { Card } from "./components/Card.tsx";
import { Card as CardType } from "./data/data.ts";
import { DeckOfCards } from "./utils/card-operations.ts";
import { FC, useState } from "react";

interface IAppProps {
  deckOfCards?: DeckOfCards;
}

const defaultDeck = new DeckOfCards();

const App: FC<IAppProps> = ({ deckOfCards = defaultDeck }) => {
  const [cards, setCards] = useState(deckOfCards.listCards());

  const shuffleCards = () => {
    deckOfCards.shuffleCards();
    setCards(deckOfCards.listCards());
  };

  const sortCards = () => {
    deckOfCards.sortCards();
    setCards(deckOfCards.listCards());
  };

  const removeCard = (card: CardType) => {
    deckOfCards.drawCard(card);
    setCards(deckOfCards.listCards());
  };

  return (
    <>
      <div className="p-4 flex gap-2 flex-wrap">
        {cards?.map((card) => (
          <Card
            suit={card.suit}
            rank={card.rank}
            onClick={removeCard}
            key={`${card.suit} ${card.rank}`}
          />
        ))}
      </div>
      <div className={"flex justify-center"}>
        <button onClick={shuffleCards}>shuffle deck</button>
        <button onClick={sortCards}>sort deck</button>
      </div>
    </>
  );
};

export default App;
