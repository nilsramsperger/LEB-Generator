import { LebGenerator } from "../../src/businessLogic/impl/LebGenerator";
import { DataStore } from "../../src/businessLogic/DataStore";
import { Data } from "../../src/businessLogic/impl/Data";
import { anything, capture, instance, mock, verify, when } from 'ts-mockito';

describe('LebGenerator', () => {
    it('should instanciate', () => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        when(mockDataStore.load()).thenResolve(new Data());

        // Act
        const lebGenerator = new LebGenerator(instance(mockDataStore));

        // Assert
        expect(lebGenerator).not.toBeNull();
    })

    it('should call load() on DataStore on instanciation', async (done) => {
        // Arrange
        let mockDataStore = mock(FakeDataStore);
        when(mockDataStore.load()).thenResolve(new Data());

        // Act
        const lebGenerator = new LebGenerator(instance(mockDataStore));

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
export class FakeDataStore implements DataStore {
    load(): Promise<Data> {
        return Promise.resolve(new Data());
    }

    store(data: Data): Promise<void> {
        return Promise.resolve();
    }
}