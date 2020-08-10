import { TopicImpl } from "../model/impl/TopicImpl";
import { Topic } from "../model/Topic";
import { TopicDto } from "../dto/TopicDto";

export class TopicFactory {
    public static createWithName(name: String) {
        const topic: Topic = new TopicImpl();
        topic.name = name;
        return topic;
    }

    public static createFrom(dto: TopicDto) {
        const topic = new TopicImpl();
        topic.name = dto.name;
        return topic;
    }
}
