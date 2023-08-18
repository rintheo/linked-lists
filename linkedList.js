class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = value;
      this.tail = value;
      return;
    }
    this.tail.nextNode = value;
    this.tail = value;
  }

  prepend(value) {
    value.nextNode = this.head;
    this.head = value;
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

// For testing

// const linkedList = new LinkedList();
// const node1 = new Node('i was head');
// const node2 = new Node('node 2');
// const node3 = new Node('node 333');
// const node4 = new Node('node 4');
// const node5 = new Node('node 5 IM TAIL');
// const node6 = new Node('Prepended!');
// const node7 = new Node('2nd prep TRU HEAD');

// linkedList.append(node1); // Expected: [2] i was head
// linkedList.append(node2); // Expected: [3] node 2
// linkedList.append(node3); // Expected: [4] node 333
// linkedList.append(node4); // Expected: [5] node 4
// linkedList.append(node5); // Expected: [6] node 5 IM TAIL
// linkedList.prepend(node6); // Expected: [1] Prepended!
// linkedList.prepend(node7); // Expected: [0] 2nd prep TRU HEAD

// console.log('##################################################\n# To String:');
// console.log(linkedList.toString());
// console.log(`##################################################\n# Size:\n${linkedList.size()}`);
// console.log('##################################################\n# Head:');
// console.log(linkedList.getHead());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.getTail());

// console.log('##################################################\n# At(0):');
// console.log(linkedList.at(0));
// console.log('##################################################\n# At(1):');
// console.log(linkedList.at(1));
// console.log('##################################################\n# At(2):');
// console.log(linkedList.at(2));
// console.log('##################################################\n# At(3):');
// console.log(linkedList.at(3));
// console.log('##################################################\n# At(4):');
// console.log(linkedList.at(4));
// console.log('##################################################\n# At(5):');
// console.log(linkedList.at(5));
// console.log('##################################################\n# At(6):');
// console.log(linkedList.at(6));
// console.log('##################################################\n# At(7):');
// console.log(linkedList.at(7));
// console.log('##################################################\n# At(-1):');
// console.log(linkedList.at(-1));
// console.log('##################################################\n# At(-3):');
// console.log(linkedList.at(-3));
// console.log('##################################################\n# At(-5):');
// console.log(linkedList.at(-5));
// console.log('##################################################\n# At(-6):');
// console.log(linkedList.at(-6));
// console.log('##################################################\n# At(-7):');
// console.log(linkedList.at(-7));
// console.log('##################################################\n# At(-8):');
// console.log(linkedList.at(-8));

// console.log('##################################################\n# Pop:');
// console.log(linkedList.pop());
// console.log('##################################################\n# At(0):');
// console.log(linkedList.at(0));
// console.log('##################################################\n# At(1):');
// console.log(linkedList.at(1));
// console.log('##################################################\n# At(2):');
// console.log(linkedList.at(2));
// console.log('##################################################\n# At(3):');
// console.log(linkedList.at(3));
// console.log('##################################################\n# At(4):');
// console.log(linkedList.at(4));
// console.log('##################################################\n# At(5):');
// console.log(linkedList.at(5));
// console.log('##################################################\n# At(6):');
// console.log(linkedList.at(6));
// console.log('##################################################\n# At(7):');
// console.log(linkedList.at(7));
// console.log('##################################################\n# To String:');
// console.log(linkedList.toString());
// console.log(`##################################################\n# Size:\n${linkedList.size()}`);
// console.log('##################################################\n# Head:');
// console.log(linkedList.getHead());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.getTail());
// console.log('##################################################\n# Find: i was head');
// console.log(linkedList.find('i was head'));
// console.log('##################################################\n# Find: 2nd prep TRU HEAD');
// console.log(linkedList.find('2nd prep TRU HEAD'));
// console.log('##################################################\n# Find: node 4');
// console.log(linkedList.find('node 4'));
// console.log('##################################################\n# Find: node 5 IM TAIL');
// console.log(linkedList.find('node 5 IM TAIL'));
// console.log('##################################################\n# Find: not here');
// console.log(linkedList.find('not here'));

// console.log('##################################################\n# insertAt: im new DAWG');
// console.log(linkedList.insertAt('im new DAWG', 4));
// console.log('##################################################\n# To String:');
// console.log(linkedList.toString());
// console.log(`##################################################\n# Size:\n${linkedList.size()}`);
// console.log('##################################################\n# Head:');
// console.log(linkedList.getHead());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.getTail());

// console.log('##################################################\n# removeAt:');
// console.log(linkedList.removeAt(6));
// console.log('##################################################\n# To String:');
// console.log(linkedList.toString());
// console.log(`##################################################\n# Size:\n${linkedList.size()}`);
// console.log('##################################################\n# Head:');
// console.log(linkedList.getHead());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.getTail());
