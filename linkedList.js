import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.nextNode = newNode;
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode.nextNode;
  }

  size(node = this.head) {
    if (node === null) return 0;
    if (node.nextNode === null) return 1;
    return 1 + this.size(node.nextNode);
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index, node = this.head) {
    if (index >= this.size() || index < -this.size()) return undefined;
    if (index === 0) return node;
    if (index < 0) return this.at(index + this.size(), node);
    return this.at(index - 1, node.nextNode);
  }

  pop() {
    if (this.head === this.tail) {
      const poppedHead = this.head;
      this.head = null;
      this.tail = null;
      return poppedHead;
    }
    const newTail = this.at(this.size() - 2);
    const poppedTail = newTail.nextNode;
    newTail.nextNode = null;
    this.tail = newTail;
    return poppedTail;
  }

  contains(value, node = this.head) {
    if (node.value === value) return true;
    if (node.nextNode === null) return false;
    return this.contains(value, node.nextNode);
  }

  find(value, node = this.head, index = 0) {
    if (node.value === value) return index;
    if (node.nextNode === null) return -1;
    return this.find(value, node.nextNode, index + 1);
  }

  toString(node = this.head) {
    if (node === null) return 'null';
    return `( ${node.value} ) -> ${this.toString(node.nextNode)}`;
  }

  insertAt(value, index, node = this.head) {
    if (index >= this.size() || index < -this.size()) return undefined;
    if (index === 0) {
      const newNode = new Node(value);
      newNode.nextNode = node.nextNode;
      if (node.nextNode === null) this.tail = newNode;
      node.nextNode = newNode;
      return newNode;
    }
    if (index < 0) return this.at(index + this.size(), node);
    return this.insertAt(value, index - 1, node.nextNode);
  }

  removeAt(index, node = this.head, prevNode = null) {
    if (index >= this.size() || index < -this.size()) return undefined;

    if (index === 0) {
      const removedNode = node;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      }
      if (removedNode === this.head) this.head = removedNode.nextNode;
      if (removedNode.nextNode === null) this.tail = prevNode;
      if (prevNode !== null) prevNode.nextNode = removedNode.nextNode;
      removedNode.nextNode = null;
      return removedNode;
    }
    if (index < 0) return this.at(index + this.size(), node);
    return this.removeAt(index - 1, node.nextNode, node);
  }
}
