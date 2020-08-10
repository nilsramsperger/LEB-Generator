import { Topic } from "../Topic";
import { TopicDto } from "../../dto/TopicDto";

export class TopicImpl implements Topic {  
    private _name: String = '';

    public static createFrom(dto: TopicDto) {
        const topic = new TopicImpl();
        topic._name = dto.name;
        return topic;
    }

    public get name(): String {
        return this._name;
    }

    public toDto(): TopicDto {
        const dto = new TopicDto();
        dto.name = this._name;
        return dto;
    }
}