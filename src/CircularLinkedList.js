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
