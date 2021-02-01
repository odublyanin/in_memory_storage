import { expect } from 'chai';
import { it, describe, after } from 'mocha';
import { Stack } from '../../src/models/stackModel';
const stack: Stack = new Stack();

describe('Add to stack test', () => {
    after(() => {
        stack.emptyStack();
    });
    it('Add the first item to stack', () => {
        stack.addValueToStack('Hello');
        expect(stack.numberOfValues()).to.equal(1);
    });
    it('Add the last item to stack', () => {
        stack.addValueToStack('World');
        expect(stack.numberOfValues()).to.equal(2);
    });
});
