import { expect } from 'chai';
import { it, describe } from 'mocha';
import { Stack } from '../../src/models/stackModel';
const stack: Stack = new Stack();

describe('Get items from stack test', () => {
    it('Add \'Hello\' item from stack', () => {
        stack.addItemToStack('Hello');
        expect(stack.numberOfItems()).to.equal(1);
    });
    it('Add \'World\' item from stack', () => {
        stack.addItemToStack('World');
        expect(stack.numberOfItems()).to.equal(2);
    });
    it('Get \'World\' item from stack', () => {
        expect(stack.getItemFromStack()).to.equal('World');
        expect(stack.numberOfItems()).to.equal(1);
    });
    it('Add \'Again\' item from stack', () => {
        stack.addItemToStack('Again');
        expect(stack.numberOfItems()).to.equal(2);
    });
    it('Get \'Again\' item from stack', () => {
        expect(stack.getItemFromStack()).to.equal('Again');
        expect(stack.numberOfItems()).to.equal(1);
    });
    it('Get \'Hello\' item from stack', () => {
        expect(stack.getItemFromStack()).to.equal('Hello');
        expect(stack.numberOfItems()).to.equal(0);
    })
});
