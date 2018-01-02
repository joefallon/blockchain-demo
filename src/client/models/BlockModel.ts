import js_sha256 = require('js-sha256');
const sha256 = js_sha256.sha256;

import Parallel = require('paralleljs');

// const worker = new Worker('../')

export class BlockModel {
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
            setImmediate(() => {
                const sequenceId = this._sequenceId.toString(10);
                const nonce      = this._nonce.toString(10);
                const data       = this._data;
                const hash = sha256(sequenceId + nonce + data);
                resolve(hash);
            });
        });
    }

    public findNonce(): Promise<number> {
        return new Promise(async (resolve, reject) => {
            // const d = [];
            // d.push(this._sequenceId);
            // d.push(this._data);
            //
            // let p = new Parallel(d);
            //
            // p.spawn((data: any[]) => {
            //     const result = [];
            //     let found = false;
            //     let nonce = 0;
            //
            //     while(!found) {
            //         const hash = sha256(data[0] + nonce + data[1]);
            //         const substr = hash.substring(0, 4);
            //
            //         if(substr == '0000') {
            //             found = true;
            //         }
            //         else {
            //             nonce++;
            //         }
            //     }
            //
            //     return [nonce];
            // }).then((data: any) => {
            //     this._nonce = data[0];
            //
            //     setImmediate(() => {
            //         resolve(this._nonce);
            //     });
            // });

            let found = false;
            this._nonce = 0;

            while(!found) {
                if(await this.hashIsValid()) {
                    found = true;
                }
                else {
                    this._nonce++;
                }
            }

            resolve(this._nonce);
        });
    }

    public async hashIsValid() {
        const hash = await this.getHashValue();
        const substr = hash.substring(0, 4);
        return (substr == '0000');
    }
}