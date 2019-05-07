import { LebGeneratorImpl } from "../../src/businessLogic/impl/LebGeneratorImpl";
import { DataStore } from "../../src/businessLogic/DataStore";
import { DataDto } from "../../src/businessLogic/dto/DataDto";
import { instance, mock, verify, when } from 'ts-mockito';
import { TestDataDto } from "../testData/TestDataDto";
import { LebGenerator } from "../../src/businessLogic/LebGenerator";
import { FakeDataStore } from "../fakes/FakeDataStore";

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
    })
})

async function delay(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}