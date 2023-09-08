class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    peek() {
      return this.first;
    }
  
    enqueue(value) {
        const newItem = new Node(value)

        if(this.length === 0){
            this.first = newItem;
            this.last = newItem;
        } else {
            const currentLast = this.last;
            currentLast.next = newItem;
            this.last = newItem;
        }
        this.length++
    }
      
    dequeue(){
        if(this.length === 0){
            return null
        }
        if(this.first === this.last){
            this.last = null;
        }
        const currentFirst = this.first;
        this.first = currentFirst.next;
        this.length--
        console.log(this);
    }
      
      
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('John');
  myQueue.peek();
  myQueue.enqueue('Sarah');
  myQueue.peek();
  myQueue.enqueue('Mike');
  myQueue.peek()
  myQueue.dequeue()
  myQueue.peek()
  myQueue.dequeue()
  myQueue.peek()
  myQueue.dequeue()
  myQueue.peek()
  
  