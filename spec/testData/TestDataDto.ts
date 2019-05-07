import { DataDto } from "../../src/businessLogic/dto/DataDto";
import { TestTopicDto } from "./TestTopicDto";
import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

export class TestDataDto extends DataDto {
    public static create(): TestDataDto {
        const data = new TestDataDto();
        return data;
    }

    public withTopic(topic: TopicDto): TestDataDto {
        this.topics.push(topic);
        return this;
    }
}