import React, { useContext, useRef, useState } from "react";
import { cn } from "@bem-react/classname";

import Card from "src/components/card";
import { LayoutHintsContext } from "src/components/layout/layout";
import useOutsideClick from "src/hooks/useOutsideClick";
import { ICards } from "./types";

import "./cards.scss";
import Hints from "../hints";

const cards = cn("cards");

const Cards: React.FC<ICards> = React.memo(({ cardsCount }) => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const ref = useRef<HTMLDivElement>(null);

    const isHintsEnabled = useContext(LayoutHintsContext);

    useOutsideClick(ref, () => {
        if (focusedIndex === -1 && activeIndex !== -1) {
            setActiveIndex(-1);
        }
    });

    const handleCardsScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (focusedIndex === -1 && activeIndex !== -1) {
            if (event.deltaY > 0) {
                if (activeIndex === cardsCount - 1) {
                    setActiveIndex(0);
                    return;
                }
                setActiveIndex(activeIndex + 1);
            } else {
                if (activeIndex === 0) {
                    setActiveIndex(cardsCount - 1);
                    return;
                }
                setActiveIndex(activeIndex - 1);
            }
        }
    };

    const setActive = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else setActiveIndex(index);
    };

    const setFocused = (index: number) => {
        if (focusedIndex === index) {
            setFocusedIndex(-1);
        } else setFocusedIndex(index);
    };

    return (
        <Hints enabled={isHintsEnabled} haveActive={activeIndex !== -1} haveFocused={focusedIndex !== -1}>
            <div className={cards()} onWheel={handleCardsScroll}>
                {[
                    Array.from(Array(cardsCount).keys()).map((item) => (
                        <Card
                            key={item}
                            reference={ref}
                            isActive={activeIndex === item}
                            setActive={() => setActive(item)}
                            isFocused={focusedIndex === item}
                            setFocused={() => setFocused(item)}
                        />
                    )),
                ]}
            </div>
        </Hints>
    );
});

export default Cards;
