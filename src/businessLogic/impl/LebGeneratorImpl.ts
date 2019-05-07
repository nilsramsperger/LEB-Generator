import { DataStore } from "../DataStore";
import { DataDto } from "../dto/DataDto";

export class LebGeneratorImpl {
    private _data: DataDto = new DataDto();

    public constructor(private _dataStore: DataStore) {
        _dataStore.load().then(data => this._data = data);
    }
}