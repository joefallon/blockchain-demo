export class NonceFinderWorkerMessage {
    public static readonly MSG_FIND_NONCE = 'MSG_FIND_NONCE';
    public static readonly MSG_HASH       = 'MSG_HASH';

    public workerMessage: string;
    public sequenceId: number;
    public nonce: number;

}