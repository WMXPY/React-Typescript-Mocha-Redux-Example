/**
 * @author WMXPY
 * @namespace Example_Store
 * @description Reducer
 */

import { Reducer } from "@sudoo/redux";
import { ACTIONS, GlobalStore } from "../../store/declare";
import { SetFooAction } from "./type";

const reduceFoo: Reducer<GlobalStore, SetFooAction> = (state: GlobalStore | undefined, action: SetFooAction) => ({

    ...state as GlobalStore,
    example: {
        ...(state as GlobalStore).example,
        foo: action.foo,
    },
});

export const exampleReducers = {

    [ACTIONS.SET_FOO]: reduceFoo,
};
