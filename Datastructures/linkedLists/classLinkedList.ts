type TclassLinkedListNode = {
  value: number | string;
  next: TclassLinkedListNode | null;
};

class linkedListNode {
  val: number | string;
  next: linkedListNode | null;
  constructor(value: string | number) {
    this.val = value;
    this.next = null;
  }
}

