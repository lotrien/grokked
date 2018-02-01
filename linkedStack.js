class LinkedStack {
  constructor() {
    this.first = null;
  }

  isEmpty() {
    return this.first === null;
  }

  push(item) {
    const oldFirst = this.first;
    this.first = { item, next: oldFirst }
  }

  pop() {
    const item = this.first.item;
    this.first = this.first.next;

    return item;
  }
}

module.exports = { LinkedStack };
