/**
 * @author WMXPY
 * @namespace Store
 * @description Store
 */

import { Redux } from "@sudoo/redux";
import { ACTIONS, GlobalStore } from "./declare";

export const globalStore: GlobalStore = {
};

export const store: Redux<GlobalStore, ACTIONS> = Redux.create<GlobalStore, ACTIONS>(globalStore);
