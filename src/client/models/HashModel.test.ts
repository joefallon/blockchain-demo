import * as assert from 'assert';

import { HashModel } from './HashModel';

describe('HashModel', () => {
    it('#hashData correctly hashes data', async () => {
        const model = new HashModel();
        const hash1 = model.hashData('');
        assert.equal(hash1, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
    });
});