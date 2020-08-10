import { Topic } from "./model/Topic";

export interface LebGenerator {
    getTopics(): Array<Topic>;

    createTopic(name: String): void;
}