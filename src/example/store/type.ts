/**
 * @author WMXPY
 * @namespace Example_Store
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../../store/declare";

export type ExampleStore = {

    readonly foo: string;
};

export type SetFooAction = {

    readonly foo: string;
} & Action<ACTIONS.SET_FOO>;
