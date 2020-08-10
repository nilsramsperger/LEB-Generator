import { DataDto } from "../../src/businessLogic/dto/DataDto";
import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

export class TestDataDto {
    private _dto: DataDto;

    private constructor() {
        this._dto = new DataDto;
    }

    public static create(): TestDataDto {
        return new TestDataDto();
    }

    public withTopic(topic: TopicDto): TestDataDto {
        this._dto.topics.push(topic);
        return this;
    }

    public toObject(): DataDto {
        return this._dto;
    }
}