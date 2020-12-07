import React from "react";
import { cn } from "@bem-react/classname";

import Copyright from "../copyright";

import "./footer.scss";

const footer = cn("footer");

const Footer: React.FC = () => (
    <div className={footer()}>
        <Copyright />
    </div>
);

export default Footer;
