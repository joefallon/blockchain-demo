import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';

import { App } from './App';

describe('App', () => {
    it('correctly sets the page title', async () => {
        const app = mount(<App/>);
        assert.equal(document.title, 'Blockchain Demo');
    });
});