import React, { useState } from "react";
import { cn } from "@bem-react/classname";

import Header from "../header";

import "./layout.scss";

const layout = cn("layout");

export const LayoutHintsContext = React.createContext(false);

const Layout: React.FC = ({ children }) => {
    const [isHintsEnabled, setIsHintsEnabled] = useState(false);

    return (
        <div className={layout()}>
            <Header onHintButtonClick={() => setIsHintsEnabled(!isHintsEnabled)} isHintsEnabled={isHintsEnabled} />
            <div className={layout("content")}>
                <LayoutHintsContext.Provider value={isHintsEnabled}>{children}</LayoutHintsContext.Provider>
            </div>
        </div>
    );
};

export default Layout;
