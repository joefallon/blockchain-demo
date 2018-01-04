import { NonceFinder } from './NonceFinder';

const worker: Worker = self as any;

worker.onmessage = async (ev: MessageEvent) => {
    const msg = JSON.parse(ev.data);
    console.log('in worker' + msg['workerId'] + '...');

    // const msg = {
    //     sequenceId: this._sequenceId,
    //     data:       this._data
    // };

    const nonceFinder = new NonceFinder(msg['difficulty'], msg['sequenceId'], msg['data']);
    const nonce = await nonceFinder.findNonce(msg['offset']);

    console.log('nonce found in worker' + msg['workerId'] + '...');

    worker.postMessage(JSON.stringify(nonce));
};