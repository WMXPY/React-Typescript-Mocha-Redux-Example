/**
 * @author WMXPY
 * @namespace Store
 * @description Store
 */

import { Redux } from "@sudoo/redux";
import { exampleReducers } from "../example/store/reducer";
import { getDefaultExampleStore } from "../example/store/type";
import { ACTIONS, GlobalStore } from "./declare";

export const globalStore: GlobalStore = {

    example: getDefaultExampleStore(),
};

export const store: Redux<GlobalStore, ACTIONS> =
    Redux.create<GlobalStore, ACTIONS>(globalStore)
        .reducers(exampleReducers);
