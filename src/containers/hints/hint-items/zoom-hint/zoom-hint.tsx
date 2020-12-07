import React, { useEffect, useState } from "react";
import { cn } from "@bem-react/classname";

import AlternateLeftThinArrow from "src/components/icons/alternate-left-thin-arrow";

import "./zoom-hint.scss";
import { IHintItem } from "../types";

const zoomHint = cn("zoomHint");

const ZoomHint: React.FC<IHintItem> = ({ enabled }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (enabled) {
            setIsVisible(true);
        }
    }, [enabled]);

    return (
        <div className={zoomHint({ isVisible })}>
            <AlternateLeftThinArrow />
            <span>
                Click on&nbsp;<i>the selected card</i> to&nbsp;zoom&nbsp;in
            </span>
        </div>
    );
};

export default ZoomHint;
