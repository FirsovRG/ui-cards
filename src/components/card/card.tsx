import React from "react";
import { cn } from "@bem-react/classname";

import { ICard } from "./types";

import "./card.scss";

const card = cn("card");

const Card: React.FC<ICard> = ({ isActive, setActive }) => (
    <div className={card({ isActive })} onClick={setActive} aria-hidden="true" />
);

export default Card;
