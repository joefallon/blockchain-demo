import js_sha256 = require('js-sha256');
const sha256 = js_sha256.sha256;

import NonceFinderWorker1 = require('worker-loader!../domain/NonceFinder1.worker.ts');
import NonceFinderWorker2 = require('worker-loader!../domain/NonceFinder2.worker.ts');
import NonceFinderWorker3 = require('worker-loader!../domain/NonceFinder3.worker.ts');
import NonceFinderWorker4 = require('worker-loader!../domain/NonceFinder4.worker.ts');

import { NonceFinder } from '../domain/NonceFinder';

export class BlockModel {
    private static readonly DIFFICULTY = 4;

    private _sequenceId: number;
    private _nonce: number;
    private _data: string;

    public constructor() {
        this._nonce      = 0;
        this._sequenceId = 1;
        this._data       = '';
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
            let found = false;
            const worker1 = new NonceFinderWorker1();
            const worker2 = new NonceFinderWorker2();
            const worker3 = new NonceFinderWorker3();
            const worker4 = new NonceFinderWorker4();

            worker1.onmessage = (message: MessageEvent) => {
                console.log('message received from worker1...');
                console.log(message);
                this._nonce = JSON.parse(message.data);

                if(!found) {
                    found = true;
                    resolve(this._nonce);
                }
            };

            worker2.onmessage = (message: MessageEvent) => {
                console.log('message received from worker2...');
                console.log(message);
                this._nonce = JSON.parse(message.data);

                if(!found) {
                    found = true;
                    resolve(this._nonce);
                }
            };

            worker3.onmessage = (message: MessageEvent) => {
                console.log('message received from worker3...');
                console.log(message);
                this._nonce = JSON.parse(message.data);

                if(!found) {
                    found = true;
                    resolve(this._nonce);
                }
            };

            worker4.onmessage = (message: MessageEvent) => {
                console.log('message received from worker4...');
                console.log(message);
                this._nonce = JSON.parse(message.data);

                if(!found) {
                    found = true;
                    resolve(this._nonce);
                }
            };

            const nonceOffSet = Math.floor(Number.MAX_SAFE_INTEGER / 4 - 1);

            const msg1 = {
                sequenceId: this._sequenceId,
                data:       this._data,
                difficulty: BlockModel.DIFFICULTY,
                offset:     0,
                workerId:   1
            };

            const msg2 = {
                sequenceId: this._sequenceId,
                data:       this._data,
                difficulty: BlockModel.DIFFICULTY,
                offset:     nonceOffSet,
                workerId:   2
            };

            const msg3 = {
                sequenceId: this._sequenceId,
                data:       this._data,
                difficulty: BlockModel.DIFFICULTY,
                offset:     nonceOffSet * 2,
                workerId:   3
            };

            const msg4 = {
                sequenceId: this._sequenceId,
                data:       this._data,
                difficulty: BlockModel.DIFFICULTY,
                offset:     nonceOffSet * 3,
                workerId:   4
            };



            console.log('sending msg to worker1...');
            console.log(msg1);
            worker1.postMessage(JSON.stringify(msg1));

            // console.log('sending msg to worker2...');
            // console.log(msg2);
            // worker2.postMessage(JSON.stringify(msg2));
            //
            // console.log('sending msg to worker3...');
            // console.log(msg3);
            // worker3.postMessage(JSON.stringify(msg3));
            //
            // console.log('sending msg to worker4...');
            // console.log(msg4);
            // worker4.postMessage(JSON.stringify(msg4));
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