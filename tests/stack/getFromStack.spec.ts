import { expect } from 'chai';
import { it, describe, after } from 'mocha';
import { Stack } from '../../src/models/stackModel';
const stack: Stack = new Stack();

describe('Get items from stack test', () => {
    after(() => {
        stack.emptyStack();
    });
    it('Add \'Hello\' item from stack', () => {
        stack.addValueToStack('Hello');
        expect(stack.numberOfValues()).to.equal(1);
    });
    it('Add \'World\' item from stack', () => {
        stack.addValueToStack('World');
        expect(stack.numberOfValues()).to.equal(2);
    });
    it('Get \'World\' item from stack', () => {
        expect(stack.getValueFromStack()).to.equal('World');
        expect(stack.numberOfValues()).to.equal(1);
    });
    it('Add \'Again\' item from stack', () => {
        stack.addValueToStack('Again');
        expect(stack.numberOfValues()).to.equal(2);
    });
    it('Get \'Again\' item from stack', () => {
        expect(stack.getValueFromStack()).to.equal('Again');
        expect(stack.numberOfValues()).to.equal(1);
    });
    it('Get \'Hello\' item from stack', () => {
        expect(stack.getValueFromStack()).to.equal('Hello');
        expect(stack.numberOfValues()).to.equal(0);
    });
});
