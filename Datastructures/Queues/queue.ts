class queue {
  data: number[];
  constructor() {
    this.data = [];
  }

  push(value: number) {
    this.data.push(value);
  }

  poll() {
    if (this.data[0] === undefined) return undefined;
    const polledValue = this.data[this.data.length - 1];
    this.data.length--;
    return polledValue;
  }
}
