class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    console.log(this.array[this.array.length - 1]);
  }

  push(value) {
    this.array.push(value)
  }

  pop() {
    this.array.pop()
  }
}

const myStack = new Stack();
myStack.push('google')
myStack.peek()
myStack.push('amazon');
myStack.peek()
myStack.pop()
myStack.peek()
