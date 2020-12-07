import React, { useEffect, useState } from "react";
import { cn } from "@bem-react/classname";

import ThinArrow from "../icons/thin-arrow";
import { IHintLayer, MountState } from "./types";

import "./hint-layer.scss";

const hintLayer = cn("hintLayer");

const HintLayer: React.FC<IHintLayer> = React.memo(({ onSkipButtonClick, shouldAppearOnScreen }) => {
    const [mountState, setMountState] = useState("");

    useEffect(() => {
        localStorage.setItem("isFirstVisit", "false");
    }, []);

    useEffect(() => {
        if (shouldAppearOnScreen) {
            setMountState(MountState.enterActive);
            setTimeout(() => setMountState(MountState.enterDone), 500);
        } else {
            setMountState(MountState.exitActive);
            setTimeout(() => setMountState(MountState.exitDone), 500);
        }
    }, [shouldAppearOnScreen]);

    if (mountState !== MountState.exitDone) {
        return (
            <div className={hintLayer()}>
                <div className={hintLayer("hint", { mountState })}>
                    <span className={hintLayer("text")}>
                        Enable <i>hints</i>
                        <br /> for better first experience!
                    </span>
                    <ThinArrow />
                    <div className={hintLayer("buttonWrapper", { mountState })}>
                        <button type="button" className={hintLayer("skipButton")} onClick={onSkipButtonClick}>
                            Skip
                        </button>
                    </div>
                </div>
                <div className={hintLayer("whitespace", { mountState })} />
            </div>
        );
    }

    return null;
});

export default HintLayer;
