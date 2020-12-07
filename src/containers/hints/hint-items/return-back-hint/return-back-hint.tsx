import React from "react";
import { cn } from "@bem-react/classname";

import UpArrow from "src/components/icons/up-arrow";

import "./return-back-hint.scss";

const returnBackHint = cn("returnBackHint");

const ReturnBackHint: React.FC = () => (
    <div className={returnBackHint()}>
        <UpArrow />
        <span>Click on&nbsp;the&nbsp;triangle above the&nbsp;card to&nbsp;return it&nbsp;to&nbsp;the&nbsp;pocket</span>
    </div>
);

export default ReturnBackHint;
