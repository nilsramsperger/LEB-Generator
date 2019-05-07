import { DataStore } from "../DataStore";
import { DataDto } from "../dto/DataDto";
import { LebGenerator } from "../LebGenerator";
import { TopicImpl } from "./TopicImpl";

export class LebGeneratorImpl implements LebGenerator {
    private _topics: Array<TopicImpl> = [];

    public constructor(private _dataStore: DataStore) {
        _dataStore.load().then(data => {
            this._topics = data.topics.map(TopicImpl.createFrom)
        });
    }

    public getTopicNames(): Array<String> {
        return this._topics.map(t => t.name);
    }
}