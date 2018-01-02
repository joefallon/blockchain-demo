import { BlockModel } from './BlockModel';

export class BlockModelFactory {
    public static create(): BlockModel {
        const model = new BlockModel();
        return model;
    }
}