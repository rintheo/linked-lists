import LinkedList from './linkedList.js';

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