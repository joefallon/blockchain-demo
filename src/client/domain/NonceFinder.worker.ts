import { NonceFinder } from './NonceFinder';

const worker: Worker = self as any;

let nonceFinder: NonceFinder = null;

worker.onmessage = async (ev: MessageEvent) => {
    const msg = JSON.parse(ev.data);

    if(msg == "STOP") {
        nonceFinder.stop();
        return;
    }

    console.log('in worker' + msg['workerId'] + '...');

    nonceFinder = new NonceFinder(msg['difficulty'], msg['sequenceId'], msg['data'], msg['prevHash']);
    const nonce = await nonceFinder.findNonce(msg['offset']);

    console.log('nonce found in worker' + msg['workerId'] + '...');

    worker.postMessage(JSON.stringify(nonce));
};