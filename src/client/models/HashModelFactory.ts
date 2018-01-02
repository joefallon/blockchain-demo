import { HashModel } from './HashModel';

export class HashModelFactory {
    public static create(): HashModel {
        const model = new HashModel();
        return model;
    }
}