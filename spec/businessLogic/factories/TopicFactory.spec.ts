import { TopicFactory } from "../../../src/businessLogic/factories/TopicFactory";
import { TopicDto } from "../../../src/businessLogic/dto/TopicDto";
import { TopicDtoBuilder } from "../../data/TopicDtoBuilder";

describe('TopicFactory', () => {
    it('should create a Topic with name', () => {
        // Arrange
        const expectedName = 'Topic 1';

        // Act
        const topic = TopicFactory.createWithName(expectedName);

        // Assert
        expect(topic.name).toBe(expectedName);
    })

    it('should create a Topic by Dto', () => {
        const expectedName = 'Topic 1';
        const dto = TopicDtoBuilder.create()
        .withName(expectedName)
        .toObject();

        // Act
        const topic = TopicFactory.createFrom(dto);

        // Assert
        expect(topic.name).toBe(expectedName);
    })
})
