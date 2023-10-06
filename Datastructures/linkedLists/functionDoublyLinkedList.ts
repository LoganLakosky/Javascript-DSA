type TfunctionDoublyLinkedListNode = {
  value: number | string;
  next: TfunctionDoublyLinkedListNode | null;
  prev?: TfunctionDoublyLinkedListNode | null;
};

function DLLcreateLinkedList({ value, next }: TfunctionDoublyLinkedListNode) {
  if (next === null) {
    return { value: value, next: null, prev: null };
  }
  return { value: value, next: next, prev: null };
}

function DLLaddLinkedListNode({ value, next, prev }: TfunctionDoublyLinkedListNode) {
  prev!.next = next
  return { value: value, next: null, prev: prev };
}

const DoublyLLaaa = DLLcreateLinkedList({ value: "A", next: null });
const DoublyLLbbb = DLLcreateLinkedList({ value: "B", next: null });

DoublyLLaaa.next = DLLaddLinkedListNode({
  value: DoublyLLbbb.value,
  next: DoublyLLbbb,
  prev: DoublyLLaaa,
});

function DLLprintLinkedList(head: TfunctionDoublyLinkedListNode | null) {
  if (head === null) return;
  console.log(head)
}

DLLprintLinkedList(DoublyLLaaa);
