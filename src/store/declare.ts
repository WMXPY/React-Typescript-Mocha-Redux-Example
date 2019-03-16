/**
 * @author WMXPY
 * @namespace Store
 * @description Declare
 */

import { ExampleStore } from "../example/store/type";

export type GlobalStore = {

    readonly example: ExampleStore;
};

export enum ACTIONS {

    SET_FOO = 'SET_FOO',
}
