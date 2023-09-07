class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top);
    return this.top;
  }

  push(value) {
    //create node with value
    //check length - if 0 top and bottom take value
    //if 1+ bottom unchanged - top takes value

    const newEntry = new Node(value);

    if (this.length === 0) {
      this.bottom = newEntry;
      this.top = newEntry;
    } else {
      const oldTop = this.top;
      this.top = newEntry;
      this.top.next = oldTop;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.peek();
myStack.push("amazon");
myStack.peek();
myStack.push("ebay");
myStack.peek();
myStack.push("udemy");
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
