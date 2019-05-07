import { DataDto } from "./dto/DataDto";

export interface DataStore {
    load(): Promise<DataDto>;

    store(data: DataDto): Promise<void>;
}