import { DataStore } from "../DataStore";
import { DataDto } from "../dto/DataDto";
import { LebGenerator } from "../LebGenerator";

export class LebGeneratorImpl implements LebGenerator {
    private _data: DataDto = new DataDto();

    public constructor(private _dataStore: DataStore) {
        _dataStore.load().then(data => this._data = data);
    }

    public getTopicNames(): Array<String> {
        return this._data.topics.map(t => t.name);
    }
}