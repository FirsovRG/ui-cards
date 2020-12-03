import React, { useRef, useState } from "react";
import { cn } from "@bem-react/classname";

import Card from "src/components/card";
import useOutsideClick from "src/hooks/useOutsideClick";
import { ICards } from "./types";

import "./cards.scss";

const cards = cn("cards");

const Cards: React.FC<ICards> = ({ cardsCount }) => {
    const [activeIndex, setActiveIndex] = useState<number>();

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        if (activeIndex !== -1) {
            setActiveIndex(-1);
        }
    });

    return (
        <div className={cards()}>
            {[
                Array.from(Array(cardsCount).keys()).map((item) => (
                    <Card
                        key={item}
                        reference={ref}
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
