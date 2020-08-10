import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

export class TestTopicDto {
    private _dto: TopicDto;
    
    private constructor() {
        this._dto = new TopicDto;
    }

    public static create(): TestTopicDto {
        return new TestTopicDto();
    }

    public withName(name: String): TestTopicDto {
        this._dto.name = name;
        return this;
    }

    public toObject(): TopicDto {
        return this._dto;
    }
}