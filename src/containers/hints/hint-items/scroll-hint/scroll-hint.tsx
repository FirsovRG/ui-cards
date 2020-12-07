import React from "react";
import { cn } from "@bem-react/classname";

import CurvedThinArrow from "src/components/icons/curved-thin-arrow";

import "./scroll-hint.scss";

const scrollHint = cn("scrollHint");

const ScrollHint: React.FC = () => (
    <div className={scrollHint()}>
        <span>
            You can use the&nbsp;mouse&nbsp;wheel (touchpad) to&nbsp;switch <i>cards</i>
        </span>
        <CurvedThinArrow />
    </div>
);

export default ScrollHint;
