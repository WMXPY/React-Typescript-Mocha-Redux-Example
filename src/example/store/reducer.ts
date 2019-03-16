/**
 * @author WMXPY
 * @namespace Example_Store
 * @description Reducer
 */

import { Reducer } from "@sudoo/redux";
import { ACTIONS, GlobalStore } from "../../store/declare";
import { SetFooAction } from "./type";

const reduceFoo: Reducer<GlobalStore, SetFooAction> = (state: GlobalStore, action: SetFooAction) => ({

    ...state,
    example: {
        ...state.example,
        foo: action.foo,
    },
});

export const exampleReducers: Record<ACTIONS, Reducer> = {

    [ACTIONS.SET_FOO]: reduceFoo,
};
