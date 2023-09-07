// [1, 10, 16, 88]

class LinkedList {
  constructor(value) {
    (this.head = {
      value,
      next: null,
    }),
      (this.tail = this.head),
      (this.length = 1);
  }

  append(value) {
    let currentNode = this.head;
    const newNode = {
      value,
      next: null,
    };
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    this.tail = newNode;
    currentNode.next = this.tail;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    const currentHead = this.head;

    this.head = newNode;
    newNode.next = currentHead;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else if (index < this.length) {
      const newNode = {
        value,
        next: null,
      };
      let currentNode = this.head;
      //loop through, counter?
      let counter = 0;
      while (counter < index - 1) {
        currentNode = currentNode.next;
        counter++;
      }
      const prevNode = currentNode;
      const nextNode = currentNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
  }

  remove(index) {
    let counter = 0;
    let currentNode = this.head;
    if (index === 0) {
      this.head = currentNode.next;
      this.length--;
    } else if (index === this.length - 1) {
        while(counter < index-1){
        currentNode = currentNode.next;
        counter++
     };
     currentNode.next = null;
     this.tail = currentNode
     this.length--
    } else {
        while(counter < index - 1){
            currentNode = currentNode.next;
            counter++
        }
        const prevNode = currentNode;
        while(counter < index + 1){
            currentNode = currentNode.next
            counter++
        }
        const nextNode = currentNode;
        prevNode.next = nextNode;
        this.length--
    }
  }

  reverse() {
    if (!this.head || !this.head.next) {
        // If the list is empty or has only one element, no need to reverse.
        return;
    }

    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
        // Store the next node.
        next = current.next;

        // Reverse the current node's next pointer.
        current.next = prev;

        // Move to the next nodes.
        prev = current;
        current = next;
    }

    // Update the head to the new head, which is the previous tail.
    this.head = prev;
}

}

const myList = new LinkedList(10);

myList.append(16);
myList.prepend(1);
myList.append(88);
myList.reverse();

console.log(myList);
