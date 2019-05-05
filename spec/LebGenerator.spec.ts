import { LebGenerator } from "../src/businessLogic/LebGenerator";

describe('LebGenerator', () => {
    it('should instanciate', () => {
        const lebGenrator = new LebGenerator();
        expect(lebGenrator).not.toBeNull();
    })
})