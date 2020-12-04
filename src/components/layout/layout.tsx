import React from "react";
import { cn } from "@bem-react/classname";

import Header from "../header";
import "./layout.scss";

const layout = cn("layout");

const Layout: React.FC = ({ children }) => (
    <div className={layout()}>
        <Header onHintButtonClick={() => {}} />
        <div className={layout("content")}>{children}</div>
    </div>
);

export default Layout;
