import { expect } from 'chai';
import { it, describe } from 'mocha';
import { Storage } from '../../src/models/storageModel';
import { sleep } from '../helpers';
const storage: Storage = new Storage();

describe('Get items from storage test', function() {
    // this.timeout(40000);
    it('Add item with key \'name\' and value \'John\' to storage', () => {
        storage.addToStorage('name', 'John');
        expect(storage.numberOfItems()).to.equal(1);
    });
    it('Get item by key \'name\' from storage', () => {
        expect(storage.checkKeyInStorage('name')).to.equal(true);
        expect(storage.getFromStorage('name')).to.equal('John');
        expect(storage.numberOfItems()).to.equal(1);
    });
    it('Get item by key \'age\' from storage', () => {
        expect(storage.checkKeyInStorage('age')).to.equal(false);
        expect(storage.getFromStorage('age')).to.be.an('null');
    });
    it('Add item with key \'name\', value \'Larry\' and TTL 30 seconds to storage', () => {
        storage.addToStorage('name', 'Larry', 30);
        expect(storage.numberOfItems()).to.equal(1);
    });
    it('Get item by key \'name\' within 30 seconds of the set from storage', async function() {
        await sleep(20);
        expect(storage.checkKeyInStorage('name')).to.equal(true);
        expect(storage.getFromStorage('name')).to.equal('Larry');
        expect(storage.numberOfItems()).to.equal(1);
    });
    it('Get item by key \'name\' more than 30 seconds after the set from storage', async function() {
        await sleep(10);
        expect(storage.checkKeyInStorage('name')).to.equal(false);
        expect(storage.getFromStorage('name')).to.be.an('null');
        expect(storage.numberOfItems()).to.equal(0);
    });
});
