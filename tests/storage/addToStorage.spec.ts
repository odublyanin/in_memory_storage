import { expect } from 'chai';
import { it, describe } from 'mocha';
import { Storage } from '../../src/models/storageModel';
const storage: Storage = new Storage();

describe('Add item to storage test', () => {
    it('Add item with key \'name\' and value \'John\' to storage', () => {
        storage.addToStorage('name', 'John');
        expect(storage.numberOfItems()).to.equal(1);
    });
    it('Add item with key \'name\' and value \'Larry\' to storage', () => {
        storage.addToStorage('name', 'Larry', 30);
        expect(storage.numberOfItems()).to.equal(1);
    });
});
