type TlinkedList = {
  value: number | string;
  next: linkedListNode | null;
};

class linkedListNode {
  value: number | string;
  //linkedListNode | null;
  next: linkedListNode | null;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

export class linkedList {
  head: TlinkedList | null;
  tail: TlinkedList | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value: number | string) {
    const node = new linkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: number | string) {
    const node = new linkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head!.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }

    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail!.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev: TlinkedList | null = this.head;
      while (prev!.next !== this.tail) {
        prev = prev!.next;
      }
      prev!.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  peek() {
    return this.head?.value;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr?.value}\n`;
        curr = curr!.next;
      }
      return listValues;
    }
  }
}
