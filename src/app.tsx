/**
 * @author WMXPY
 * @namespace Example
 * @description Index
 */

import { ReduxProvider } from "@sudoo/redux";
import * as React from "react";
import { RouterProps } from "react-router";
import { HashRouter, Route } from "react-router-dom";
import "../style/common/global.scss";
import { Example } from "./example/example";
import { store } from "./store/store";

export const App: React.FC = () => (

    <ReduxProvider redux={store}>
        <HashRouter>
            <Route render={(routeProps: RouterProps) => <Example bar="bar" {...routeProps} />} path="/" />
        </HashRouter>
    </ReduxProvider>
);

export default App;
