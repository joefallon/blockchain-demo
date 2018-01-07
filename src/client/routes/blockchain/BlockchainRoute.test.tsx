import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route } from 'react-router';

import { BlockchainRoute, BlockchainRouteProps } from './BlockchainRoute';

describe('BlockchainRoute', () => {
    afterEach(async () => {
        document.title = '';
    });

    function renderRoute(props: BlockchainRouteProps) {
        return (<BlockchainRoute {...props}/>);
    }

    it('initializes correctly', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route render={(props) => renderRoute(props)}/>
            </MemoryRouter>
        );

        assert.equal(document.title, 'Blockchain | Blockchain Demo');

        const blockComponent = wrapper.find('.block-component');
        assert.equal(blockComponent.length, 0);
    });

    it('pressing the Add Block button adds a block', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route render={(props) => renderRoute(props)}/>
            </MemoryRouter>
        );

        const button = wrapper.find('input[name="add-block-button"]');
        button.simulate('click');

        const blockComponent = wrapper.find('.block-component');
        assert.equal(blockComponent.length, 1);
    });
});