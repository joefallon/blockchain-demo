import js_sha256 = require('js-sha256');
const sha256 = js_sha256.sha256;

import NonceFinderWorker = require('worker-loader!../domain/NonceFinder.worker.ts');

import { NonceFinder } from '../domain/NonceFinder';

export class BlockModel {
    private static readonly DIFFICULTY = 3;

    private _sequenceId: number;
    private _nonce: number;
    private _data: string;
    private _worker: Worker;

    public constructor() {
        this._nonce      = 0;
        this._sequenceId = 1;
        this._data       = '';
        this._worker     = new NonceFinderWorker();
    }

    public getNonce(): number {
        return this._nonce;
    }

    public getSequenceId(): number {
        return this._sequenceId;
    }

    public setData(data: string) {
        this._data = data;
    }

    public getHashValue(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => {
                const sequenceId = this._sequenceId;
                const nonce      = this._nonce;
                const data       = this._data;

                const nonceFinder = new NonceFinder(BlockModel.DIFFICULTY, sequenceId, data);
                const hash = nonceFinder.hash(nonce);

                resolve(hash);
            }, 0);
        });
    }

    public findNonce(): Promise<number> {
        return new Promise(async (resolve, reject) => {
            const worker = this._worker;

            worker.onmessage = (message: MessageEvent) => {
                console.log('message received from worker1...');
                console.log(message);
                this._nonce = JSON.parse(message.data);
                resolve(this._nonce);
            };

            const msg = {
                sequenceId: this._sequenceId,
                data:       this._data,
                difficulty: BlockModel.DIFFICULTY,
                offset:     0,
                workerId:   1
            };

            console.log('sending msg to worker1...');
            console.log(msg);
            worker.postMessage(JSON.stringify(msg));
        });
    }

    public hashIsValid(): boolean {
        const sequenceId = this._sequenceId;
        const nonce      = this._nonce;
        const data       = this._data;

        const nonceFinder = new NonceFinder(BlockModel.DIFFICULTY, sequenceId, data);

        return nonceFinder.isHashMatch(nonce);
    }
}