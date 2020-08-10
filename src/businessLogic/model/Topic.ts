import { TopicDto } from "../dto/TopicDto";

export interface Topic {
    name: String;

    toDto(): TopicDto;
}