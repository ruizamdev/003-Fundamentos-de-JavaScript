/* 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
} */

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail =  this.head;

    this.length = 1;
  }
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList);
myLinkedList.append(2);
console.log(myLinkedList);
myLinkedList.append(3);
console.log(myLinkedList);
myLinkedList.prepend(0);
console.log(myLinkedList)