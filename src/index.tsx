import React from "react";
import ReactDom from "react-dom";

import App from "./containers/app";

import "./index.scss";

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
