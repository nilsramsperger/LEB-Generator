import { DataStore } from "../DataStore";
import { LebGenerator } from "../LebGenerator";
import { TopicImpl } from "../model/impl/TopicImpl";
import { Topic } from "../model/Topic";

export class LebGeneratorImpl implements LebGenerator {
    private _topics: Array<Topic> = [];

    public constructor(private _dataStore: DataStore) {
        _dataStore.load().then(data => {
            this._topics = data.topics.map(TopicImpl.createFrom)
        });
    }

    public createTopic(name: String): void {
        const topic = new TopicImpl();
        topic.name = name;
        this._topics.push(topic);
    }

    public getTopics(): Array<Topic> {
        return this._topics;
    }
}