/**
 * @author WMXPY
 * @namespace Example
 * @description Entry
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import '../style/common/global.sass';
import Entry from "./index";

declare const module: any;

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (<AppContainer>
            <App />
        </AppContainer>),
        document.getElementById("container"));
};

render(Entry);
if (module.hot) {

    module.hot.accept("./index", () => {
        render(require("./index").default);
    });
}
