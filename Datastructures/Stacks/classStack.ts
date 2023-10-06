type TStackItems = number | string;

type TStack = {
  items: TStackItems[];
  count: number;
};

class Stack {
  items: TStackItems[];
  count: number;
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element: any) {
    this.items[this.count] = element;
    this.count += 1;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return null;
    this.count -= 1;
    return this.items.pop();
  }

  peek() {
    if (this.count === 0) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  printStack() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

  clearStack() {
    this.items.length = 0;
    this.count = 0;
    return this.items;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);

stack.clearStack();
stack.printStack();
