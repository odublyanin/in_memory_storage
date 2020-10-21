import { expect } from 'chai';
import { it, describe } from 'mocha';
import { Stack } from '../../src/models/stackModel';
const stack: Stack = new Stack();

describe('Add to stack test', () => {
    it('Add \'Hello\' item to stack', () => {
        stack.addItemToStack('Hello');
        expect(stack.numberOfItems()).to.equal(1);
    });
    it('Add the line \'World \' to stack', () => {
        stack.addItemToStack('World');
        expect(stack.numberOfItems()).to.equal(2);
        stack.emptyStack();
    });
});
