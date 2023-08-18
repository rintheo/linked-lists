# linked-lists
A small linked list module made in JavaScript.

## Node
### Properties
- ```value``` - ```Node``` instance value.
- ```nextNode``` - Reference to next ```Node``` Object in the linked list, otherwise ```null``` if current ```Node``` instance is at the end of the list.

## LinkedList
### Properties
- ```listHead``` - ```Node``` Object marking the beginning of the linked list.
- ```listTail``` - ```Node``` Object marking the end of the linked list.

### Methods
- ```append(value)``` - Append a new ```Node``` Object with value ```value``` at the end of the linked list.
- ```prepend(value)``` - Prepend a new ```Node``` Object with value ```value``` at the start of the linked list.
- ```size()``` - Returns an integer value representing the current length of the linked list.
- ```head()``` - Returns the linked list ```listHead``` property representing the start of the linked list. 
- ```tail()``` - Returns the linked list ```listTail``` property representing the end of the linked list. 
- ```at(index)``` - Returns the ```Node``` Object at ```index``` in the linked list, otherwise returns ```undefined```.
- ```pop()``` - Remove the tail ```Node``` Object from the linked list and return the removed ```Node``` Object.
- ```contains(value)``` - Returns ```true``` if the linked list contains ```value```, otherwise returns ```false```.
- ```find(value)``` - Returns an integer representing the index in the linked list by which the value ```value``` is found, otherwise returns ```-1``` when the value is not found.
- ```toString()``` - Returns a string concatenating all the values in the linked list. 
- ```insertAt(value, index)``` - Insert a new ```Node``` Object with value ```value``` next to the ```Node``` with ```index``` in the linked list and returns the new ```Node``` Object.
- ```removeAt(index) ``` - Removes the ```Node``` Object at ```index``` position in the linked list and returns the removed ```Node``` Object. 