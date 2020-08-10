import { mock, when, instance } from "ts-mockito";
import { FakeDataStore } from "../fakes/FakeDataStore";
import { TestDataDto } from "../data/DataDtoBuilder";
import { LebGeneratorFactory } from "../../src/businessLogic/LebGeneratorFactory";
import { LebGenerator } from "../../src/businessLogic/LebGenerator";

describe('LebGeneratorFactory', () => {
    it('should create an instance of LebGenerator', () => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let testData = TestDataDto.create().toObject();
        when(mockDataStore.load()).thenResolve(testData);
        
        // Act
        const lebGenerator: LebGenerator = LebGeneratorFactory.create(instance(mockDataStore));

        // Assert
        expect(lebGenerator).not.toBeNull();
    })
})