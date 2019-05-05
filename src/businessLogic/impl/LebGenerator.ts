import { DataStore } from "../DataStore";
import { Data } from "./Data";

export class LebGenerator {
    private _data: Data = new Data();

    public constructor(private _dataStore: DataStore) {
        _dataStore.load().then(data => this._data = data);
    }
}