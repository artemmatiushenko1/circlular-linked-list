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
    return this.length;
  }

  insert() {}
  delete() {}
  deleteAll() {}

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

  clone() {}
  reverse() {}
  findFirst() {}
  findLast() {}
  clear() {}
  extend() {}
}

const list = new CircularLinkedList();
['2', '3'].forEach((value) => list.append(value));
console.log(list.get(1));

module.exports = CircularLinkedList;
