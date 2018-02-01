class LinkedQueue {
  constructor() {
    this.first = null;
    this.last;
  }

  isEmpty() {
    return this.first === null;
  }

  enqueue(item) {
    const oldLast = this.last;
    let last = { item, next: null };
    this.last = last;

    if (this.isEmpty()) {
      this.first = last;
    } else {
      oldLast.next = last;
    }
  }

  dequeue() {
    const item = this.first.item;
    this.first = this.first.next;

    if (this.isEmpty()) {
      this.last = null;
    }
    return item;
  }
}

module.exports = { LinkedQueue };
