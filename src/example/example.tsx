/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import { redText } from "../../style/example.scss";
import { GlobalStore } from "../store/declare";
import { setFoo } from "./store/action";

export type ExampleProps = {

    readonly bar: string;
};

type ConnectedStates = {

    readonly foo: string;
};

type ConnectedActions = {

    readonly setFoo: (foo: string) => void;
};

export type ConnectedExampleProps = ExampleProps & ConnectedStates & ConnectedActions;

const connector = Connector.create<GlobalStore, ConnectedStates, ConnectedActions>()
    .connectStates(({ example }) => ({

        foo: example.foo,
    })).connectActions({

        setFoo,
    });

export const ExampleBase: React.FC<ConnectedExampleProps> = (props: ConnectedExampleProps) => {

    return (<div className={redText}>
        {props.foo}
        <button onClick={() => props.setFoo(props.bar)}>SetFoo</button>
    </div>);
};

export const Example: React.ComponentType<ExampleProps> = connector.connect(ExampleBase);
