import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route } from 'react-router';

import { HashRoute, HashRouteProps } from './HashRoute';
import { HashModel } from '../../models/HashModel';

describe('HashRoute', () => {
    afterEach(async () => {
        document.title = '';
    });

    it('initializes correctly', async () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route render={(props) => renderHash(props)}/>
            </MemoryRouter>
        );

        assert.equal(document.title, 'Hash | Blockchain Demo');
    });

    function renderHash(props: HashRouteProps) {
        props.model = new HashModel();
        return (<HashRoute {...props}/>);
    }
});