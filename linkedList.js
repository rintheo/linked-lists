import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.listHead = null;
    this.listTail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.listTail !== null) this.listTail.nextNode = newNode;
    this.listTail = newNode;
    this.listHead = this.listHead ?? newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.listHead;
    this.listHead = newNode;
  }

  size() {
    let counter = 0;
    let currentNode = this.listHead;
    while (currentNode !== null) {
      counter += 1;
      currentNode = currentNode.nextNode;
    }
    return counter;
  }

  head() {
    return this.listHead;
  }

  tail() {
    return this.listTail;
  }

  at(index) {
    if (index >= this.size() || index < -this.size()) return undefined;
    const workingIndex = index < 0 ? index + this.size() : index;
    let counter = 0;
    let currentNode = this.listHead;
    while (counter < workingIndex) {
      counter += 1;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    const poppedTail = this.listTail;
    const newTail = this.at(-2) ? this.at(-2) : null;
    if (newTail !== null) newTail.nextNode = null;
    if (this.size() === 1) this.listHead = null;
    this.listTail = newTail;
    return poppedTail;
  }

  contains(value) {
    let currentNode = this.listHead;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.listHead;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return -1;
  }

  toString() {
    let string = '';
    let currentNode = this.listHead;
    while (currentNode !== null) {
      string = `${string}( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return `${string}null`;
  }

  insertAt(value, index) {
    if (index >= this.size() || index < -this.size()) return undefined;
    const workingIndex = index < 0 ? index + this.size() : index;
    let currentNode = this.listHead;
    for (let i = 0; i < workingIndex; i += 1) {
      currentNode = currentNode.nextNode;
    }
    const newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode;
    if (newNode.nextNode === null) this.listTail = newNode;
    currentNode.nextNode = newNode;
    return newNode;
  }

  removeAt(index) {
    if (index >= this.size() || index < -this.size()) return undefined;
    const workingIndex = index < 0 ? index + this.size() : index;
    let prevNode = null;
    let currentNode = this.listHead;
    for (let i = 0; i < workingIndex; i += 1) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    const removedNode = currentNode;
    if (removedNode === this.listHead) this.listHead = removedNode.nextNode;
    if (removedNode === this.listTail) this.listTail = prevNode;
    if (prevNode !== null) prevNode.nextNode = removedNode.nextNode;
    removedNode.nextNode = null;
    return removedNode;
  }
}
