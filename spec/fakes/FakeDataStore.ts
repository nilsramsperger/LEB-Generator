import { DataDto } from "../../src/businessLogic/dto/DataDto";
import { DataStore } from "../../src/businessLogic/DataStore";

export class FakeDataStore implements DataStore {
    load(): Promise<DataDto> {
        return Promise.resolve(new DataDto());
    }

    store(data: DataDto): Promise<void> {
        return Promise.resolve();
    }
}