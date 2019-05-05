import { Data } from "./impl/Data";

export interface DataStore {
    load(): Promise<Data>;

    store(data: Data): Promise<void>;
}