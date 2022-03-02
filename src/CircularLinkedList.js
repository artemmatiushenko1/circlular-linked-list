class Node {
  constructor(character) {
    const elementType = typeof character;
    if (elementType !== 'string') {
      throw new Error(`The value of node can\'t be typeof ${elementType}`);
    }
    if (character.length > 1) {
      throw new Error('The value should be a signle character');
    }
    this.value = character;
    this.next = null;
  }
}

class CircularLinkedList {
  #head = null;
  #tail = null;
  #length = 0;

  append(element) {
    const node = new Node(element);

    if (!this.#head) {
      this.#head = node;
      node.next = this.#head;
    } else {
      let currentNode = this.#head;
      while (currentNode.next !== this.#head) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.next = this.#head;
    }

    this.#tail = node;
    this.#length++;
  }

  length() {
    return this.#length;
  }

  insert(element, index) {
    if (index < 0 || index > this.#length) {
      throw new Error('The provided index is incorrect');
    }
    const node = new Node(element);
    let prevNode = this.#head;
    let currentIndex = 0;
    if (index === 0) {
      node.next = this.#head;
      this.#head = node;
      this.#tail.next = node;
    } else {
      while (currentIndex < index - 1) {
        prevNode = prevNode.next;
        currentIndex += 1;
      }
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.#length += 1;
  }

  delete(index) {
    if (index < 0 || index > this.#length - 1) {
      throw new Error('The provided index is incorrect');
    }

    let currentIndex = 0;
    let currentNode = this.#head;
    let elementToRemove = null;

    if (index === 0) {
      elementToRemove = this.#head.value;
      this.#head = currentNode.next;
      this.#tail.next = this.#head;
      this.#length -= 1;
      return elementToRemove;
    }

    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    elementToRemove = currentNode.next.value;
    currentNode.next = currentNode.next.next;
    this.#length -= 1;
    return elementToRemove;
  }

  deleteAll(element) {
    let currentNode = this.#head;
    let currentIndex = 0;

    while (currentIndex < this.#length) {
      if (currentNode.value === element) {
        this.delete(currentIndex);
        currentNode = currentNode.next;
      } else {
        currentNode = currentNode.next;
        currentIndex += 1;
      }
    }
  }

  get(index) {
    if (index < 0 || index >= this.#length) {
      throw new Error('The provided index is incorrect');
    }
    let currentIndex = 0;
    let currentNode = this.#head;
    while (currentIndex < this.#length) {
      if (currentIndex === index) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      currentIndex += 1;
    }
  }

  clone() {
    const newList = new CircularLinkedList();
    let currentNode = this.#head;
    do {
      newList.append(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== this.#head);

    return newList;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.#head;
    let next = null;

    do {
      next = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = next;
    } while (currentNode !== this.#head);

    this.#head.next = prevNode;
    this.#head = prevNode;
  }

  findFirst() {}
  findLast() {}
  clear() {}
  extend() {}

  print() {
    let current = this.#head;
    do {
      if (current) {
        console.log(current.value);
        current = current.next;
      }
    } while (current !== this.#head);
  }
}

const list = new CircularLinkedList();
['1', '2', '2', '3'].forEach((value) => list.append(value));
console.log(list.get(1));
console.log(list.length());
list.insert('4', list.length() - 1);
list.delete(0);
list.deleteAll('2');
list.reverse();
list.print();

module.exports = CircularLinkedList;
