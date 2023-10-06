import { linkedList } from "../linkedLists/classLinkedList";

class linkedListStack {
  list: any;
  constructor() {
    this.list = new linkedList();
  }

  push(value: number | string) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.peek();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const test = new linkedListStack();
test.push(1);
test.push(2);
test.push(3);
console.log(test.print());
