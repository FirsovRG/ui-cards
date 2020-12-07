import React from "react";
import { cn } from "@bem-react/classname";

import ThinArrowLeft from "src/components/icons/thin-arrow-left";
import ScrollHint from "./hint-items/scroll-hint";
import ZoomHint from "./hint-items/zoom-hint";
import OutsideClickHint from "./hint-items/outside-click-hint";
import ReturnBackHint from "./hint-items/return-back-hint";
import { IHints } from "./types";

import "./hints.scss";

const hints = cn("hints");

const Hints: React.FC<IHints> = React.memo(({ children, enabled, haveActive, haveFocused }) => (
    <div className={hints()}>
        <div className={hints("top", { enabled: enabled && !haveActive })}>
            <span>
                Select <i>card</i> from the set
            </span>
            <ThinArrowLeft />
        </div>
        <div className={hints("middle")}>
            <div
                className={hints("middle-left", {
                    enabled: enabled && haveActive && !haveFocused,
                })}
            >
                <ScrollHint />
            </div>
            {children}
            <div className={hints("middle-right", { enabled: enabled && haveActive })}>
                <div
                    className={hints("middle-right-hint", {
                        enabled: enabled && haveActive && !haveFocused,
                    })}
                >
                    <ZoomHint enabled={enabled && haveActive} />
                </div>
                <div
                    className={hints("middle-right-hint", {
                        enabled: enabled && haveActive && !haveFocused,
                    })}
                >
                    <OutsideClickHint enabled={enabled && haveActive} />
                </div>
            </div>
        </div>
        <div className={hints("bottom", { enabled: enabled && haveFocused })}>
            <ReturnBackHint />
        </div>
    </div>
));

export default Hints;
