import React from "react";
import { cn } from "@bem-react/classname";

import Card from "src/components/card";
import { ICards } from "./types";

import "./cards.scss";

const cards = cn("cards");

const Cards: React.FC<ICards> = ({ cardsCount }) => (
    <div className={cards()}>{[Array.from(Array(cardsCount).keys()).map((item) => <Card key={item} />)]}</div>
);

export default Cards;
