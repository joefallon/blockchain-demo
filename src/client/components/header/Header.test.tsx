import * as assert from 'assert';
import * as React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { mount } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {
    it('correctly highlights hash nav-link', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route render={(props) => <Header {...props} /> }/>
            </MemoryRouter>
        );

        const hashLink = wrapper.find('.hash-link');
        assert.equal(hashLink.parent().at(0).hasClass('active'), true);

        const blockLink = wrapper.find('.block-link');
        assert.equal(blockLink.parent().at(0).hasClass('active'), false);

        const blockchainLink = wrapper.find('.blockchain-link');
        assert.equal(blockchainLink.parent().at(0).hasClass('active'), false);
    });


    it('correctly highlights block nav-link', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/block']} initialIndex={0}>
                <Route render={(props) => <Header {...props} /> }/>
            </MemoryRouter>
        );

        const hashLink = wrapper.find('.hash-link');
        assert.equal(hashLink.parent().at(0).hasClass('active'), false);

        const blockLink = wrapper.find('.block-link');
        assert.equal(blockLink.parent().at(0).hasClass('active'), true);

        const blockchainLink = wrapper.find('.blockchain-link');
        assert.equal(blockchainLink.parent().at(0).hasClass('active'), false);
    });

    it('correctly highlights blockchain nav-link', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/blockchain']} initialIndex={0}>
                <Route render={(props) => <Header {...props} /> }/>
            </MemoryRouter>
        );

        const hashLink = wrapper.find('.hash-link');
        assert.equal(hashLink.parent().at(0).hasClass('active'), false);

        const blockLink = wrapper.find('.block-link');
        assert.equal(blockLink.parent().at(0).hasClass('active'), false);

        const blockchainLink = wrapper.find('.blockchain-link');
        assert.equal(blockchainLink.parent().at(0).hasClass('active'), true);
    });
});