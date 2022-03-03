# Circular singly linked list

A circular linked list is a type of linked list in which the first and the last nodes are also connected to each other to form a circle. There is no NULL at the end.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/artemmatiushenko1/circlular-linked-list.git
   ```
2. Open project's directory and install NPM packages:
   ```sh
   npm install
   ```

### Test

To run unit tests do the following in the terminal:

```sh
 npm test
```

### Usage

Initialize a list:

- Import a `CirclularLinkedList` into your file:

  ```js
  const CirclularLinkedList = require('./src/CirclularLinkedList');
  ```

- Create a list

  ```js
  const list = new CirclularLinkedList();
  ```

Methods:

- ##### `append(element)`

  Should add node to the end of the list

  ```js
  list.append('5');
  ```

- ##### `get(index)`

  Should return the element by it's index in list

  ```js
  list.get('1');
  ```

- ##### `length()`

  Should return the number of elements in list

  ```js
  list.length();
  ```

- ##### `insert(element, index)`

  Should insert an element at a given index in list

  ```js
  list.insert('4', 3);
  ```

- ##### `delete(index)`

  Should delete an element from list by it's index

  ```js
  list.delete(1);
  ```

- ##### `deleteAll(element)`

  Should delete all occurencies of a given element from list

  ```js
  list.deleteAll('2');
  ```

- ##### `findFirst(element)`

  Should return an index of the first occurence of a given element

  ```js
  list.findFirst('3');
  ```

- ##### `findLast(element)`

  Should return an index of the last occurence of a given element

  ```js
  list.findLast('3');
  ```

- ##### `extend(list)`

  Should add all elements from one list to the end of the other list

  ```js
  list.findLast(secondList);
  ```

- ##### `reverse()`

  Should reverse a list

  ```js
  list.reverse();
  ```

### Built with

- Node.js
- JavaScript
- JEST

`Requirements: Node.js v12.x+`
`CI failure commit` - [link](https://github.com/artemmatiushenko1/circlular-linked-list/commit/ff09c3c81bb1f9a465d0813acf33146c8e8d702a)
`Variant: 0416 % 2 = 0`
