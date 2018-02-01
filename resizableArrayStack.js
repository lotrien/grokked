class ResizableArrayStack {
  constructor() {
    this.stack = new Array(1);
    this.n = 0;
  }
  
  push(item) {
    if (this.n === this.stack.length) {
      this.resize(2 * this.stack.length);
    }
    this.stack[this.n++] = item;
  }
  resize(capacity) {
    let copy = new Array(capacity);
    for (let i = 0; i < this.n; i++) {
      copy[i] = this.stack[i];
    }
    this.stack = copy;
  }
}

module.exports = { ResizableArrayStack };
