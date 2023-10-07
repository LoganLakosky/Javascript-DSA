type TDLinkedList = {
  value: number | string;
  next: TDLinkedList | null;
  prev: TDLinkedList | null;
};

class DLinkedListNode {
  next: TDLinkedList | null;
  prev: TDLinkedList | null;
  value: number | string;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLinkedList {
  head: TDLinkedList | null;
  tail: TDLinkedList | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value: number | string) {
    const node = new DLinkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node!.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: number | string) {
    const node = new DLinkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;

    const value = this.head!.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }

    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;

    const value = this.tail!.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    }

    this.size--;
    return value;
  }

  peek() {
    return this.head!.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  sortLinkedList() {
    for (let i = 0; i < this.size; i++) {
      let curr = this.head;

      while (curr) {
        if (curr.next?.value === undefined) break;
        if (curr!.value > curr!.next!.value) {
          const temp = curr!.value;
          curr!.value = curr!.next!.value;
          curr!.next.value = temp;
        }
        curr = curr!.next;
      }
    }
  }

  checkIfSorted() {
    let curr = this.head;
    while (curr) {
      if (curr.value > curr.next!.value) {
        return false;
      }

      curr = curr.next;
    }

    return true;
  }

  print() {
    if (this.isEmpty()) return null;

    let curr = this.head;
    let listValues: string = "";
    while (curr) {
      listValues += curr.value;
      curr = curr!.next;
    }
    return listValues;
  }
}


