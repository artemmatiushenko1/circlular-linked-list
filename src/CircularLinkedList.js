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

  append() {}
  length() {}
  insert() {}
  delete() {}
  deleteAll() {}
  get() {}
  clone() {}
  reverse() {}
  findFirst() {}
  findLast() {}
  clear() {}
  extend() {}
}
