import React, { useEffect, useState } from "react";
import { cn } from "@bem-react/classname";

import { ICard } from "./types";

import "./card.scss";

const card = cn("card");

const Card: React.FC<ICard> = ({ isActive, setActive, reference }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [modificators, setModificators] = useState({ isActive: false, isFocused: false });

    useEffect(() => {
        if (!isActive && modificators.isFocused) {
            setModificators({ isActive: true, isFocused: false });
            setTimeout(() => setModificators({ isActive: false, isFocused: false }), 500);
            return;
        }
        setModificators({ ...modificators, isActive });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (isActive) {
            // setIsFocused(true);
            setModificators({ ...modificators, isFocused: true });
            return;
        }
        setActive();
    };

    return <div ref={reference} className={card(modificators)} onClick={handleCardClick} aria-hidden="true" />;
};

export default Card;
