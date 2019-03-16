/**
 * @author WMXPY
 * @namespace Example_Store
 * @description Action
 */

import { ACTIONS } from "../../store/declare";
import { SetFooAction } from "./type";

export const setFoo = (foo: string): SetFooAction => ({
    type: ACTIONS.SET_FOO,
    foo,
});
