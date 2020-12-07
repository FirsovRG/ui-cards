import React, { useEffect, useState } from "react";
import { cn } from "@bem-react/classname";

import MouseClick from "src/components/icons/mouse-click";

import "./outside-click-hint.scss";
import { IHintItem } from "../types";

const outsideClickHint = cn("outsideClickHint");

const OutsideClickHint: React.FC<IHintItem> = ({ enabled }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (enabled) {
            setIsVisible(true);
        }
    }, [enabled]);

    return (
        <div className={outsideClickHint({ isVisible })}>
            <span>
                Click <i>outside</i> to hide the card
            </span>
            <MouseClick />
        </div>
    );
};

export default OutsideClickHint;
