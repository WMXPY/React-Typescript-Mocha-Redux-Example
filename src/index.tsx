/**
 * @author WMXPY
 * @namespace Example
 * @description Index
 */

import { ReduxProvider } from "@sudoo/redux";
import * as React from "react";
import { HashRouter, Route } from "react-router-dom";
import { store } from "./store/store";

export class Entry extends React.Component {

    public render(): JSX.Element {

        return (
            <ReduxProvider redux={store}>
                <HashRouter>
                    <Route />
                </HashRouter>
            </ReduxProvider>
        );
    }
}

export default Entry;
