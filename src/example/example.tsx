/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import { GlobalStore } from "../store/declare";

export type ExampleProps = {

    readonly bar: string;
};

export type ConnectedExampleProps = {

    readonly foo: string;
};

const connector = Connector.create<GlobalStore, ConnectedExampleProps>()
    .connectStates(({ example }: GlobalStore): ConnectedExampleProps => ({

        foo: example.foo,
    })).connectActions({

    });

export const ExampleBase: React.FC<ExampleProps & ConnectedExampleProps> = (props: ExampleProps & ConnectedExampleProps) => {

    return <div></div>;
};

export const Example: React.ComponentType<ExampleProps> = connector.connect(ExampleBase);
