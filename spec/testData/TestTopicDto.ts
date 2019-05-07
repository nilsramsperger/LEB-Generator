import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

export class TestTopicDto extends TopicDto {
    public static create(): TestTopicDto {
        const topicDto = new TestTopicDto();
        return topicDto;
    }

    public withName(name: String): TestTopicDto {
        this.name = name;
        return this;
    }
}