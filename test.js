import LinkedList from './linkedList.js';

// Create a blank linked list for testing
const linkedList = new LinkedList();

// append(), prepend() tests
linkedList.append('i was head'); // Expected: [2] i was head
linkedList.append('node 2'); // Expected: [3] node 2
linkedList.append('node 333'); // Expected: [4] node 333
linkedList.append('node 4'); // Expected: [5] node 4
linkedList.append('node 5 IM TAIL'); // Expected: [6] node 5 IM TAIL
linkedList.prepend('Prepended!'); // Expected: [1] Prepended!
linkedList.prepend('2nd prep TRU HEAD'); // Expected: [0] 2nd prep TRU HEAD

// toString(), head(), tail() tests
console.log('##################################################\n# To String:');
console.log(linkedList.toString());
console.log(`##################################################\n# Size:\n${linkedList.size()}`);
console.log('##################################################\n# Head:');
console.log(linkedList.head());
console.log('##################################################\n# Tail:');
console.log(linkedList.tail());

// at() tests
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
// console.log('##################################################\n# At(-2):');
// console.log(linkedList.at(-2));
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

// pop() tests
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
// console.log(linkedList.head());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.tail());

// contains() tests
// console.log('##################################################\n# Contains: i was head');
// console.log(linkedList.contains('i was head'));
// console.log('##################################################\n# Contains: 2nd prep TRU HEAD');
// console.log(linkedList.contains('2nd prep TRU HEAD'));
// console.log('##################################################\n# Contains: node 4');
// console.log(linkedList.contains('node 4'));
// console.log('##################################################\n# Contains: node 5 IM TAIL');
// console.log(linkedList.contains('node 5 IM TAIL'));
// console.log('##################################################\n# Contains: not here');
// console.log(linkedList.contains('not here'));

// find() tests
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

// insertAt() tests
// console.log('##################################################\n# insertAt: im new DAWG');
// console.log(linkedList.insertAt('im new DAWG', 0));
// console.log('##################################################\n# To String:');
// console.log(linkedList.toString());
// console.log(`##################################################\n# Size:\n${linkedList.size()}`);
// console.log('##################################################\n# Head:');
// console.log(linkedList.head());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.tail());

// removeAt() tests
// console.log('##################################################\n# removeAt:');
// console.log(linkedList.removeAt(1));
// console.log('##################################################\n# To String:');
// console.log(linkedList.toString());
// console.log(`##################################################\n# Size:\n${linkedList.size()}`);
// console.log('##################################################\n# Head:');
// console.log(linkedList.head());
// console.log('##################################################\n# Tail:');
// console.log(linkedList.tail());
