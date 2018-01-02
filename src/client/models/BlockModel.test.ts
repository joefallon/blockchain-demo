import { BlockModel } from './BlockModel';
import * as assert from 'assert';

describe('BlockModel', () => {
    it('correctly initializes', async () => {
        const model = new BlockModel();
        const expectedHash = '4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5';

        assert.equal(model.getHashValue(), expectedHash);
        assert.equal(model.getNonce(), 0);
        assert.equal(model.getSequenceId(), 1);
    });
});