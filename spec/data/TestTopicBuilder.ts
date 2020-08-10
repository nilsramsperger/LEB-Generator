import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

export class TopicDtoBuilder {
    private _dto: TopicDto;
    
    private constructor() {
        this._dto = new TopicDto;
    }

    public static create(): TopicDtoBuilder {
        return new TopicDtoBuilder();
    }

    public withName(name: String): TopicDtoBuilder {
        this._dto.name = name;
        return this;
    }

    public toObject(): TopicDto {
        return this._dto;
    }
}