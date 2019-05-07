import { LebGenerator } from "./LebGenerator";
import { DataStore } from "./DataStore";
import { LebGeneratorImpl } from "./impl/LebGeneratorImpl";

export class LebGeneratorFactory {
    public static create(store: DataStore): LebGenerator {
        return new LebGeneratorImpl(store);
    }
}