import js_sha256 = require('js-sha256');
const sha256 = js_sha256.sha256;

export class NonceFinder {
    private _difficulty: number;
    private _sequenceId: number;
    private _data: string;
    private _prevHash: string;

    public constructor(difficulty: number, sequenceId=0, data='', prevHash='') {
        this._difficulty = difficulty;
        this._sequenceId = sequenceId;
        this._data       = data;
        this._prevHash   = prevHash;
    }

    public findNonce(): number {
        let nonce = 0;

        while(!this.isHashMatch(nonce)) {
            ++nonce;
        }

        return nonce;
    }

    public hash(nonce: number): string {
        const dataStructure = {
            nonce:       nonce,
            sequence_id: this._sequenceId,
            data:        this._data,
            prev_hash:   this._prevHash
        };

        const serializedData = JSON.stringify(dataStructure);
        const hash = sha256(serializedData);

        return hash;
    }

    private isHashMatch(nonce: number): boolean {
        const hash   = this.hash(nonce);
        const diff   = this._difficulty;
        const substr = hash.substring(0, diff);
        let matchString = '';

        for(let i = 0; i < diff; i++) {
            matchString = matchString.concat('0');
        }

        return (substr == matchString);
    }
}