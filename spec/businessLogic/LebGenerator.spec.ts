import { LebGeneratorImpl } from "../../src/businessLogic/impl/LebGeneratorImpl";
import { instance, mock, verify, when } from 'ts-mockito';
import { TestDataDto as DataDtoBuilder } from "../data/DataDtoBuilder";
import { LebGenerator } from "../../src/businessLogic/LebGenerator";
import { FakeDataStore } from "../fakes/FakeDataStore";
import { TestTopicDto as TopicDtoBuilder } from "../data/TestTopicBuilder";
import 'source-map-support/register'
import { TopicDto } from "../../src/businessLogic/dto/TopicDto";

describe('LebGenerator', () => {
    it('should call load() on DataStore on construction', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let testData = DataDtoBuilder.create().toObject();
        when(mockDataStore.load()).thenResolve(testData);

        // Act
        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));

        // Assert
        expect(lebGenerator).not.toBeNull();
        await delay(10);
        verify(mockDataStore.load()).once();
        done();
    });

    it('should return a loaded topic', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let expectedTopicDto: TopicDto = TopicDtoBuilder.create()
            .withName('Topic 1')
            .toObject();
        let testData = DataDtoBuilder.create()
            .withTopic(expectedTopicDto)
            .toObject();
        when(mockDataStore.load()).thenResolve(testData);

        // Act
        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));
        await delay(10);
        const topics = lebGenerator.getTopics();

        // Assert
        expect(topics).not.toBeNull();
        expect(topics.length).toBe(1);
        expect(topics[0].toDto()).toEqual(expectedTopicDto);
        done();
    });

    it('should return two loaded topics in order', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let expectedTopicDto1 = TopicDtoBuilder.create()
            .withName('Topic 1')
            .toObject();
        let expectedTopicDto2 = TopicDtoBuilder.create()
            .withName('Topic 2')
            .toObject();
        let expectedData = DataDtoBuilder.create()
            .withTopic(expectedTopicDto1)
            .withTopic(expectedTopicDto2)
            .toObject();
        when(mockDataStore.load()).thenResolve(expectedData);

        // Act
        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));
        await delay(10);
        const topicNames = lebGenerator.getTopics();

        // Assert
        expect(topicNames).not.toBeNull();
        expect(topicNames.length).toBe(2);
        expect(topicNames[0].toDto()).toEqual(expectedTopicDto1);
        expect(topicNames[1].toDto()).toEqual(expectedTopicDto2);
        done();
    });

    it('should create a new topic with given name', async (done) => {
        // Arrange
        const expectedTopicName = "Topic 1";

        let mockDataStore = mock(FakeDataStore);
        let expectedData = DataDtoBuilder.create().toObject();
        when(mockDataStore.load()).thenResolve(expectedData);

        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));
        await delay(10);

        // Act
        lebGenerator.createTopic(expectedTopicName);

        // Assert
        const topics = lebGenerator.getTopics();
        expect(topics).not.toBeNull();
        expect(topics.length).toBe(1);
        expect(topics[0].name).toBe(expectedTopicName);
        done();
    });
})

async function delay(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
