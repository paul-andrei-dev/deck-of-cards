import { IRank, ISuit } from "../data.ts";
import { CSSProperties, FC } from "react";
import { SUIT_MAPPER } from "../const.ts";
import { Card as CardType } from "../data.ts";

interface ICardProps {
  suit: ISuit;
  rank: IRank;
  style?: CSSProperties;
  onClick: ({ suit, rank }: CardType) => void;
}

export const Card: FC<ICardProps> = ({ suit, rank, style, onClick }) => {
  return (
    <div
      className={"border-black border h-20 w-20 flex flex-col items-center"}
      style={style}
      onClick={() => onClick({ suit, rank })}
    >
      {rank}
      <img src={SUIT_MAPPER[suit]} alt={`${suit} icon`} className="h-10 w-10" />
    </div>
  );
};
