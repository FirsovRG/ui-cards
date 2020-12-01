import React from "react";
import { cn } from "@bem-react/classname";

import "./layout.scss";

const layout = cn("layout");

const Layout: React.FC = ({ children }) => <div className={layout()}>{children}</div>;

export default Layout;
