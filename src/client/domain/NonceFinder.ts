import js_sha256 = require('js-sha256');
const sha256 = js_sha256.sha256;

addEventListener('findNonce', async (message: any) => {
    const sequenceId = message['sequenceId'];
    const data = message['data'];
    const nonce = await findNonce(sequenceId, data);

    postMessage(nonce, null, null);
});

function findNonce(sequenceId: number, data: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        let found = false;
        let nonce = 0;

        while(!found) {
            if(isHashValid(sequenceId, nonce, data)) {
                found = true;
            }
            else {
                nonce++;
            }
        }

        resolve(nonce);
    });
}

function isHashValid(sequenceId: number, nonce: number, data: string): boolean {
    const hash = getHashValue(sequenceId, nonce, data);
    const substr = hash.substring(0, 4);
    return (substr == '0000');
}

function getHashValue(sequenceId: number, nonce: number, data: string): string {
    const hash = sha256(sequenceId + nonce + data);
    return hash;
}