import { NonceFinder } from './NonceFinder';
import * as assert from 'assert';

describe('NonceFinder', () => {
    it('#findNonce finds the correct nonce value', async () => {
        const nonceFinder = new NonceFinder(1, 1, 'test', 'prev-hash');
        const nonce = nonceFinder.findNonce();
        assert.equal(nonce, 6);
    });

    it('#hash returns the correct hash value', async () => {
        const nonceFinder = new NonceFinder(1, 1, 'test', 'prev-hash');
        const hash = nonceFinder.hash(6);
        assert.equal(hash, '07edf74a583c6fc1860cdb323068f379c77efa61d1fcae428225b8d9b1bc1d7d');
    });
});