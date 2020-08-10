import { DataDto } from "../../src/businessLogic/dto/DataDto";
import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

export class DataDtoBuilder {
    private _dto: DataDto;

    private constructor() {
        this._dto = new DataDto;
    }

    public static create(): DataDtoBuilder {
        return new DataDtoBuilder();
    }

    public withTopic(topic: TopicDto): DataDtoBuilder {
        this._dto.topics.push(topic);
        return this;
    }

    public toObject(): DataDto {
        return this._dto;
    }
}