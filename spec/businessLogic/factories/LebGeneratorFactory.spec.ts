import { mock, when, instance } from "ts-mockito";
import { FakeDataStore } from "../../fakes/FakeDataStore";
import { DataDtoBuilder } from "../../data/DataDtoBuilder";
import { LebGeneratorFactory } from "../../../src/businessLogic/factories/LebGeneratorFactory";
import { LebGenerator } from "../../../src/businessLogic/LebGenerator";

describe('LebGeneratorFactory', () => {
    it('should create an instance of LebGenerator', () => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        let testData = DataDtoBuilder.create().toObject();
        when(mockDataStore.load()).thenResolve(testData);
        
        // Act
        const lebGenerator: LebGenerator = LebGeneratorFactory.create(instance(mockDataStore));

        // Assert
        expect(lebGenerator).not.toBeNull();
    })
})
