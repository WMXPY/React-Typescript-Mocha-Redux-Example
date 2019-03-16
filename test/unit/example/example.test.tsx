/**
 * @author WMXPY
 * @namespace Example
 * @description Example Unit Test
 */

import { Sandbox } from "@sudoo/mock";
import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { ConnectedExampleProps, ExampleBase } from '../../../src/example/example';

describe('Given a <Example /> Component', (): void => {

    const chance: Chance.Chance = new Chance('example-example');

    const getDefaultProps = (): ConnectedExampleProps => ({

        foo: chance.string(),
        bar: chance.string(),
        setFoo: Sandbox.stub(),
    });

    const render = (props = getDefaultProps()) => {

        return shallow(
            (<ExampleBase {...props} />),
        );
    };

    it('should render a div', (): void => {

        const props: ConnectedExampleProps = getDefaultProps();
        const component: ShallowWrapper = render(props);

        expect(component.type()).to.be.equal('div');
    });

    it('should be able to set Foo', (): void => {

        const setFooSandbox = Sandbox.create();
        const props: ConnectedExampleProps = {
            ...getDefaultProps(),
            setFoo: setFooSandbox.func(),
        };

        const component: ShallowWrapper = render(props);
        component.find('button').simulate('click');

        expect(setFooSandbox.calls).to.be.lengthOf(1);
    });
});
