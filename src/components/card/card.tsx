import React from "react";
import { cn } from "@bem-react/classname";

import { ICard } from "./types";
import UpArrow from "../icons/up-arrow";

import "./card.scss";

const card = cn("card");

const Card: React.FC<ICard> = React.memo(({ isActive, setActive, isFocused, setFocused, reference }) => {
    const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        if (isActive) {
            if (isFocused) {
                return;
            }
            setFocused();
            return;
        }
        setActive();
    };

    const handleUpArrowClick = () => {
        setFocused();
        setTimeout(() => setActive(), 500);
    };

    return (
        <div ref={reference} className={card({ isActive, isFocused })} onClick={handleCardClick} aria-hidden="true">
            {isFocused && (
                <button type="button" onClick={handleUpArrowClick} className={card("button")}>
                    <UpArrow />
                </button>
            )}
        </div>
    );
});

export default Card;
