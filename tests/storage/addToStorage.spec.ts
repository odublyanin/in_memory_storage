import { expect } from 'chai';
import { it, describe, after } from 'mocha';
import { Storage } from '../../src/models/storageModel';
const storage: Storage = new Storage();

describe('Add item to storage test', () => {
    after(() => {
        storage.emptyStorage();
    });
    it('Add the first item with key \'name\' to storage', () => {
        storage.addToStorage('name', 'John');
        expect(storage.numberOfItems()).to.equal(1);
    });
    it('Add the second item with key \'name\' to storage', () => {
        storage.addToStorage('name', 'Larry', 30);
        expect(storage.numberOfItems()).to.equal(1);
    });
});
