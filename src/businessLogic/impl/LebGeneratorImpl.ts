import { DataStore } from "../DataStore";
import { LebGenerator } from "../LebGenerator";
import { Topic } from "../model/Topic";
import { TopicFactory } from "../factories/TopicFactory";

export class LebGeneratorImpl implements LebGenerator {
    private _topics: Array<Topic> = [];

    public constructor(private _dataStore: DataStore) {
        _dataStore.load().then(data => {
            this._topics = data.topics.map(TopicFactory.createFrom)
        });
    }

    public createTopic(name: String): void {
        const topic = TopicFactory.createWithName(name);
        this._topics.push(topic);
    }

    public getTopics(): Array<Topic> {
        return this._topics;
    }
}