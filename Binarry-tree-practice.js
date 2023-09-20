class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(input) {
    //create and update new node in tree
    const newNode = new Node(input);
    let previousValue = null;
    let currentNodeValue = this.root;

    //check for root
    if (!this.root) {
      this.root = newNode;
      return;
    }

    //check if current node is true
    //if true set previous to current
    //set current to right if higher / left if lower
    //repeat until current is null
    //when current is null set previous left(if lower) or right (if higher) to new Node

    while (currentNodeValue) {
      previousValue = currentNodeValue;
      input > currentNodeValue.value
        ? (currentNodeValue = currentNodeValue.right)
        : (currentNodeValue = currentNodeValue.left);
    }

    if (currentNodeValue === null) {
      input > previousValue.value
        ? (previousValue.right = newNode)
        : (previousValue.left = newNode);
    }
  }

  lookup(input) {
    //check if tree is empty
    if (!this.root) {
      console.log("tree is empty");
      return false;
    }

    //check root value
    //if matches input return true and node
    //no match set current node to right (if input is higher) or left (if input is lower)
    //repeat until current node is null
    //if null return false and 'not found

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === input) {
        console.log(currentNode);
        return true;
      }
      input > currentNode.value
        ? (currentNode = currentNode.right)
        : (currentNode = currentNode.left);
    }

    console.log("Not found");
    return false;
  }

  remove(input) {
    //check root for empty list
    if (!this.root) {
      console.log("Tree is empty");
      return false;
    }

    //check current value for match to input
    //if false, set previous to current and current node to right(if higher) or left (if lower) and repeat until current node is null
    //if no match found return false and no such item found
    //if match, set target to currentnode and current node to right
    //if right is null, set previous right to null

    let currentNode = this.root;
    let parentNode = null;

    while(currentNode){
        if(input > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right
        } else if (input < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left
        } else if( input === currentNode.value){
            if(currentNode.right === null){
    
                if(parentNode.right === currentNode){
                    parentNode.right = null;
                }else if(parentNode.left === currentNode) {
                    parentNode.left = null;
                }
                console.log(this);
                return
            } else if(currentNode.right.left === null){
                currentNode.right.left = currentNode.left;
                if(parentNode.right === currentNode){
                    parentNode.right = currentNode.right
                } else if (parentNode.left === currentNode){
                    parentNode.left = currentNode.right
                }
                console.log(this);
                return

            } else {
                let target = currentNode//9
                parentNode = currentNode;// 9
                currentNode = currentNode.right;// 20
                while(currentNode.left){
                    parentNode = currentNode;//20
                    currentNode = currentNode.left//15
                }
                parentNode.left = null;
                target.value = currentNode.value

                console.log(this);
                return
            }
        }
        
    }

  
    console.log('Not found');
    return false
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(99);
tree.insert(15);
tree.insert(1);
tree.insert(11)
tree.remove(16);


