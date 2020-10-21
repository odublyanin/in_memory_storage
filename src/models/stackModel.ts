export class Stack {
    private stack: String[];

    constructor() {
        this.stack = [];
    }

    public addItemToStack(item: String): void {
        this.stack.push(item);
    }

    public getItemFromStack(): String {
        return this.stack.pop();
    }

    public numberOfItems(): Number {
        return this.stack.length;
    }

    public emptyStack(): void {
        this.stack = [];
    }
}
