class priorityQueue {
  data: number[];
  constructor() {
    this.data = [];
  }

  push(value: number) {
    this.data.push(value);
  }

  poll() {
    if (this.data[0] === undefined) return undefined;
    this.sortQueue();
    const polledValue = this.data[this.data.length - 1];
    this.data.length--;
    return polledValue;
  }

  sortQueue() {
    const dataArr = this.data;

    for (let i = 0; i < dataArr.length - 1; i++) {
      for (let j = 0; j < dataArr.length - i - 1; j++) {
        if (dataArr[j] > dataArr[j + 1]) {
          [dataArr[j], dataArr[j + 1]] = [dataArr[j + 1], dataArr[j]];
        }
      }
    }
    return dataArr;
  }
}
