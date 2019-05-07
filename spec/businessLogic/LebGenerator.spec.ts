import { LebGeneratorImpl } from "../../src/businessLogic/impl/LebGeneratorImpl";
import { instance, mock, verify, when } from 'ts-mockito';
import { TestDataDto } from "../testData/TestDataDto";
import { LebGenerator } from "../../src/businessLogic/LebGenerator";
import { FakeDataStore } from "../fakes/FakeDataStore";
import { TestTopicDto } from "../testData/TestTopicDto";
import 'source-map-support/register'

describe('LebGenerator', () => {
    it('should call load() on DataStore on construction', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let testData = TestDataDto.create();
        when(mockDataStore.load()).thenResolve(testData);

        // Act
        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));

        // Assert
        expect(lebGenerator).not.toBeNull();
        await delay(10);
        verify(mockDataStore.load()).once();
        done();
    });

    it('should return the name of a loaded topic', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let testTopic = TestTopicDto.create()
            .withName('Topic 1');
        let testData = TestDataDto.create()
            .withTopic(testTopic);
        when(mockDataStore.load()).thenResolve(testData);

        // Act
        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));
        await delay(10);
        const topicNames = lebGenerator.getTopicNames();

        // Assert
        expect(topicNames).not.toBeNull();
        expect(topicNames.length).toBe(1);
        expect(topicNames[0]).toBe(testTopic.name);
        done();
    });

    it('should return the names of two loaded topics in order', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let testTopic1 = TestTopicDto.create()
            .withName('Topic 1');
        let testTopic2 = TestTopicDto.create()
            .withName('Topic 2');
        let testData = TestDataDto.create()
            .withTopic(testTopic1)
            .withTopic(testTopic2);
        when(mockDataStore.load()).thenResolve(testData);

        // Act
        const lebGenerator: LebGenerator = new LebGeneratorImpl(instance(mockDataStore));
        await delay(10);
        const topicNames = lebGenerator.getTopicNames();

        // Assert
        expect(topicNames).not.toBeNull();
        expect(topicNames.length).toBe(2);
        expect(topicNames[0]).toBe(testTopic1.name);
        expect(topicNames[1]).toBe(testTopic2.name);
        done();
    });
})

async function delay(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}