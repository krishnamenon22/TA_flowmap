import React from "react";
import Card from "./Card";
import { CardProps } from "../../types/CardTypes";

export type CardGridLayoutProps = {
  cards: CardProps[];
}

function CardGridLayout({ cards }: CardGridLayoutProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card   {...card} />
      ))}
    </div>
  );
}

export default CardGridLayout;
