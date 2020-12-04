import React, { useState } from "react";
import { cn } from "@bem-react/classname";

import HintLayer from "../hint-layer";
import HintBulbIcon from "../icons/hint-bulb-icon";
import { IHeader } from "./types";

import "./header.scss";

const header = cn("header");

const Header: React.FC<IHeader> = ({ onHintButtonClick }) => {
    const [showHintLayer, setShowHintLayer] = useState(true);

    const handleHintButtonClick = () => {
        setShowHintLayer(false);
        onHintButtonClick();
    };

    return (
        <>
            <div className={header()}>
                <h1 className={header("title")}>Card Pocket UI</h1>
                <button type="button" className={header("hint-button")} onClick={handleHintButtonClick}>
                    <HintBulbIcon />
                </button>
            </div>

            <HintLayer onSkipButtonClick={() => setShowHintLayer(false)} shouldAppearOnScreen={showHintLayer} />
        </>
    );
};

export default Header;
