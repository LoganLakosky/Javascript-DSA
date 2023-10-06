class Heap {
  data: number[];
  constructor() {
    this.data = [];
  }

  getParentIdx(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIdx(i: number) {
    return i * 2 + 1;
  }

  getRightChildIdx(i: number) {
    return i * 2 + 2;
  }

  swap(i1: number, i2: number) {
    if (this.data[i1] && this.data[i2] == null) return null;

    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];

    return this.data;
  }

  push(key: number) {
    this.data[this.data.length] = key;
    this.heapifyUp();
  }

  heapifyUp() {
    let current = this.data.length - 1;
    let parentIdx = this.getParentIdx(current);

    while (this.data[current] > this.data[parentIdx]) {
      this.swap(current, this.getParentIdx(current));
      current = this.getParentIdx(current);
    }
  }

  heapifyDown() {
    let current = 0;

    while (this.data[this.getLeftChildIdx(current)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIdx(current);

      if (
        this.data[this.getRightChildIdx(current)] !== undefined &&
        this.data[this.getRightChildIdx(current)] > this.data[this.getLeftChildIdx(current)]
      ) {
        biggestChildIndex = this.getRightChildIdx(current);
      }

      if (this.data[current] < this.data[biggestChildIndex]) {
        this.swap(current, biggestChildIndex);
        current = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  poll() {
    const maxValue = this.data[0];

    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();

    return maxValue;
  }
}

const heap = new Heap();
heap.push(25);
heap.push(30);
console.log(heap);

console.log(heap.swap(0, 1));
