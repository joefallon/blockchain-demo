import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route } from 'react-router';

import { BlockRoute, BlockRouteProps } from './BlockRoute';
import { BlockModel } from '../../models/BlockModel';

describe('BlockRoute', () => {
    afterEach(async () => {
        document.title = '';
    });

    function renderHash(props: BlockRouteProps) {
        props.model = new BlockModel();
        return (<BlockRoute {...props}/>);
    }

    it('initializes correctly', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route render={(props) => renderHash(props)}/>
            </MemoryRouter>
        );

        assert.equal(document.title, 'Block | Blockchain Demo');

        const seqIdInput = wrapper.find('input[name="sequence-id"]');
        assert.equal(seqIdInput.prop('value'), 1);

        const nonceInput = wrapper.find('input[name="nonce"]');
        assert.equal(nonceInput.prop('value'), 0);

        const textarea = wrapper.find('textarea[name="data-input"]');
        assert.equal(textarea.prop('value'), '');

        const hashInput = wrapper.find('input[name="hash-value"]');
        assert.equal(hashInput.prop('value'), '');

        const hashStatus = wrapper.find('.status-value');
        assert.equal(hashStatus.text(), 'INVALID');
    });

});