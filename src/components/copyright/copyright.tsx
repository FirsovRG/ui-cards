import React from "react";
import { cn } from "@bem-react/classname";

import Github from "../icons/github";
import "./copyright.scss";

const copyright = cn("copyright");

const Copyright: React.FC = () => (
    <div className={copyright()}>
        <a href="https://github.com/FirsovRG" className={copyright("link")} target="_blank" rel="noreferrer">
            <span className={copyright("label")}>FirsovRG</span>
            <div className={copyright("icon")}>
                <Github />
            </div>
        </a>
    </div>
);

export default Copyright;
