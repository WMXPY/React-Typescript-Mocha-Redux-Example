/**
 * @author WMXPY
 * @namespace Example
 * @description Entry
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./index";

declare const module: any;

const render = (Component: React.ComponentType<any>): void => {

    ReactDOM.render(
        (<AppContainer>
            <Component />
        </AppContainer>),
        document.getElementById("container"));
};

render(App);
if (module.hot) {

    module.hot.accept("./index", () => {
        render(require("./index").default);
    });
}
