import js_sha256 = require('js-sha256');
const sha256 = js_sha256.sha256;

export class HashModel {

    public constructor() {

    }

    // noinspection JSMethodCanBeStatic
    public hashData(data: string): string {
        const hash = sha256(data);
        return hash;
    }
}