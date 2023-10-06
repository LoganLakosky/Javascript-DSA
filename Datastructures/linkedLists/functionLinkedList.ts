type TfunctionLinkedListNode = {
  value: number | string;
  next: TfunctionLinkedListNode | null;
};

function createLinkedList({ value, next }: TfunctionLinkedListNode) {
  if (next === null) {
    return { value: value, next: null };
  }
  return { value: value, next: next };
}

function addLinkedListNode({ value, next }: TfunctionLinkedListNode) {
  return { value: value, next: next };
}

const aaa = createLinkedList({ value: "A", next: null });
const bbb = createLinkedList({ value: "B", next: null });
const ccc = createLinkedList({ value: "C", next: null });
const ddd = createLinkedList({ value: "D", next: null });
aaa.next = addLinkedListNode({ value: bbb.value, next: ccc });

function printLinkedList(head: TfunctionLinkedListNode | null) {
  if (head === null) return;
  console.log(head);
}

printLinkedList(aaa);
