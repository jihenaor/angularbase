import { IBuilder } from './iBuilder';

export abstract class BuilderTemplate<T> implements IBuilder<T>{

    protected _MODEL: T;

    public constructor() {
        this._MODEL = this.initialize();
    }

    public build(): T {
        return this._MODEL;
    }

    protected abstract initialize(): T;
}
