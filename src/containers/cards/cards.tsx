import React, { useState } from "react";
import { cn } from "@bem-react/classname";

import Card from "src/components/card";
import { ICards } from "./types";

import "./cards.scss";

const cards = cn("cards");

const Cards: React.FC<ICards> = ({ cardsCount }) => {
    const [activeIndex, setActiveIndex] = useState<number>();

    return (
        <div className={cards()}>
            {[
                Array.from(Array(cardsCount).keys()).map((item) => (
                    <Card
                        key={item}
                        isActive={activeIndex === item}
                        setActive={() => {
                            if (activeIndex === item) {
                                setActiveIndex(-1);
                            } else setActiveIndex(item);
                        }}
                    />
                )),
            ]}
        </div>
    );
};

export default Cards;
