const CircularLinkedList = require('./CircularLinkedList.js');

describe('append', () => {
  test('should throw an error when appending value of 10 (number)', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(10)).toThrow(
      `The value of node can\'t be typeof number`
    );
  });

  test('should throw an error when appending value of true (boolean)', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(true)).toThrow(
      `The value of node can\'t be typeof boolean`
    );
  });

  test('should throw an error when appending value of { a: 20 } (object)', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append({ a: '10' })).toThrow(
      `The value of node can\'t be typeof object`
    );
  });

  test('should throw an error when appending value of undefined', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(undefined)).toThrow(
      `The value of node can\'t be typeof undefined`
    );
  });

  test('should throw an error when appending value of two characters string', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append('ab')).toThrow(
      'The value should be a signle character'
    );
  });

  test("should add value of '1' as the first element to the list when list is empty", () => {
    const list = new CircularLinkedList();

    list.append('1');

    expect(list.get(0)).toBe('1');
    expect(list.length()).toBe(1);
  });

  test("should properly add value of '4' to the end of list when there're already 3 elements in list", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    list.append('4');

    expect(list.get(3)).toBe('4');
    expect(list.length()).toBe(4);
  });
});

describe('get', () => {
  test("should throw an error when accessing an element with index which doesn't exists", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '3', '5', '6'].forEach((value) => list.append(value));

    expect(() => list.get(10)).toThrow('The provided index is incorrect');
  });

  test('should throw an error when try to access element when the list is empty', () => {
    const list = new CircularLinkedList();

    expect(() => list.get(10)).toThrow('The provided index is incorrect');
  });

  test('should return the 1st element by index from list with only one element', () => {
    const list = new CircularLinkedList();
    list.append('1');

    const element = list.get(0);

    expect(element).toBe('1');
  });

  test('should return the 3rd element by index from list with multiple elements', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '3', '5', '6'].forEach((value) => list.append(value));

    const element = list.get(2);

    expect(element).toBe('3');
  });

  test('should return the last element from list with multiple elements', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '3', '5', '6'].forEach((value) => list.append(value));

    const lastIndexElement = list.length() - 1;
    const element = list.get(lastIndexElement);

    expect(element).toBe('6');
  });

  test('should return the last element by index from list with only one element', () => {
    const list = new CircularLinkedList();
    list.append('1');

    const lastIndexElement = list.length() - 1;
    const element = list.get(lastIndexElement);

    expect(element).toBe('1');
  });
});

describe('length', () => {
  test('should return a length of the list with multiple elements', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    const length = list.length();

    expect(length).toBe(3);
  });

  test('should return a length of an empty list', () => {
    const list = new CircularLinkedList();

    const length = list.length();

    expect(length).toBe(0);
  });

  test('should return a length of list with only 1 element', () => {
    const list = new CircularLinkedList();
    list.append('1');

    const length = list.length();

    expect(length).toBe(1);
  });
});

describe('insert', () => {
  test("should properly insert value '4' at index of 2", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5'].forEach((value) => list.append(value));

    list.insert('4', 2);

    expect(list.length()).toBe(5);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
    expect(list.get(2)).toBe('4');
    expect(list.get(3)).toBe('3');
    expect(list.get(4)).toBe('5');
  });

  test("should insert value '4' at the beginning of list (index = 0)", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5'].forEach((value) => list.append(value));

    list.insert('4', 0);

    expect(list.length()).toBe(5);
    expect(list.get(0)).toBe('4');
    expect(list.get(1)).toBe('1');
    expect(list.get(2)).toBe('2');
    expect(list.get(3)).toBe('3');
    expect(list.get(4)).toBe('5');
  });

  test("should insert value '4' at the last index at the moment of insertion", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5'].forEach((value) => list.append(value));

    list.insert('4', list.length() - 1);

    expect(list.length()).toBe(5);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
    expect(list.get(2)).toBe('3');
    expect(list.get(3)).toBe('4');
    expect(list.get(4)).toBe('5');
  });

  test('should throw an error when passing index greater than max available index', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.insert('4', 10)).toThrow(
      'The provided index is incorrect'
    );
  });

  test('should throw an error when passing index less than zero', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.insert('4', -1)).toThrow(
      'The provided index is incorrect'
    );
  });

  test('should throw an error when passing value of unacceptable type', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.insert(4, 1)).toThrow(
      `The value of node can\'t be typeof number`
    );
  });
});

describe('delete', () => {
  test('should properly delete an element with index 1', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    const deletedElement = list.delete(1);

    expect(deletedElement).toBe('2');
    expect(list.get(1)).toBe('3');
    expect(list.length()).toBe(2);
  });

  test('should properly delete the 1st element from the list with only one element', () => {
    const list = new CircularLinkedList();
    list.append('1');

    const deletedElement = list.delete(0);

    expect(deletedElement).toBe('1');
    expect(list.length()).toBe(0);
  });

  test('should properly delete the 1st element from the list with multiple elements', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    const deletedElement = list.delete(0);

    expect(deletedElement).toBe('1');
    expect(list.length()).toBe(2);
  });

  test('should delete the last element from list', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    const lastElementIndex = list.length() - 1;
    const deletedElement = list.delete(lastElementIndex);

    expect(deletedElement).toBe('3');
    expect(() => list.get(2)).toThrow('The provided index is incorrect');
    expect(list.length()).toBe(2);
  });

  test('should throw an error when passing index less than zero', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.delete(-2)).toThrow('The provided index is incorrect');
  });

  test('should throw an error when passing index greater than max available index', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.delete(4)).toThrow('The provided index is incorrect');
  });
});

describe('deleteAll', () => {
  test("should delete all occurencies of '3' element when there's 2 occurencies", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '3', '5', '6'].forEach((value) => list.append(value));

    list.deleteAll('3');

    expect(list.length()).toBe(4);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
    expect(list.get(2)).toBe('5');
    expect(list.get(3)).toBe('6');
  });

  test("should delete one '3' element when there's only one occurence", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5', '6'].forEach((value) => list.append(value));

    list.deleteAll('3');

    expect(list.length()).toBe(4);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
    expect(list.get(2)).toBe('5');
    expect(list.get(3)).toBe('6');
  });

  test("should delete nothing when there's no occurencies of a given element", () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5', '6'].forEach((value) => list.append(value));

    list.deleteAll('7');

    expect(list.length()).toBe(5);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
    expect(list.get(2)).toBe('3');
    expect(list.get(3)).toBe('5');
    expect(list.get(4)).toBe('6');
  });
});

describe('clone', () => {
  test('should create a copy of list', () => {
    const list = new CircularLinkedList();
    ['1', '2'].forEach((value) => list.append(value));

    const listCopy = list.clone();

    expect(listCopy.get(0)).toBe('1');
    expect(listCopy.get(1)).toBe('2');
    expect(listCopy.length()).toBe(2);
  });

  test('should not affect original list when manipulating a copy', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5'].forEach((value) => list.append(value));

    const listCopy = list.clone();
    listCopy.delete(0);

    expect(list.get(0)).toBe('1');
    expect(list.length()).toBe(4);
    expect(listCopy.get(0)).toBe('2');
    expect(listCopy.length()).toBe(3);
  });
});

describe('reverse', () => {
  test('should properly reverse a list', () => {
    const list = new CircularLinkedList();
    ['1', '2', '3', '5'].forEach((value) => list.append(value));

    list.reverse();

    expect(list.get(0)).toBe('5');
    expect(list.get(1)).toBe('3');
    expect(list.get(2)).toBe('2');
    expect(list.get(3)).toBe('1');
  });

  test('should properly reverse a list with only one element', () => {
    const list = new CircularLinkedList();
    ['1'].forEach((value) => list.append(value));

    list.reverse();

    expect(list.get(0)).toBe('1');
  });

  test('should properly reverse an empty list', () => {
    const list = new CircularLinkedList();

    list.reverse();

    expect(list.length()).toBe(0);
  });
});

describe('findFirst', () => {
  test("should return an index of the first occurence of element '2'", () => {
    const list = new CircularLinkedList();
    ['1', '2', '2', '2'].forEach((value) => list.append(value));

    const firstOccurrenceIndex = list.findFirst('2');

    expect(firstOccurrenceIndex).toBe(1);
  });

  test('should return -1 when the element is not in the list', () => {
    const list = new CircularLinkedList();
    ['1', '2', '2', '2'].forEach((value) => list.append(value));

    const firstOccurrenceIndex = list.findFirst('5');

    expect(firstOccurrenceIndex).toBe(-1);
  });
});

describe('findLast', () => {
  test("should return an index of the last occurence of element '2'", () => {
    const list = new CircularLinkedList();
    ['1', '2', '2', '2'].forEach((value) => list.append(value));

    const lastOccurrenceIndex = list.findLast('2');

    expect(lastOccurrenceIndex).toBe(3);
  });

  test('should return -1 when the element is not in the list', () => {
    const list = new CircularLinkedList();
    ['1', '2', '2', '2'].forEach((value) => list.append(value));

    const lastOccurrenceIndex = list.findLast('10');

    expect(lastOccurrenceIndex).toBe(-1);
  });
});

describe('clear', () => {
  test('should clear a list', () => {
    const list = new CircularLinkedList();
    ['1', '2', '2', '2'].forEach((value) => list.append(value));

    list.clear();

    expect(list.length()).toBe(0);
    expect(() => list.get(1)).toThrow('The provided index is incorrect');
  });
});

describe('extend', () => {
  test('should properly add elements from one list to the end of the other list', () => {
    const firstList = new CircularLinkedList();
    ['1', '2'].forEach((value) => firstList.append(value));
    const secondList = new CircularLinkedList();
    ['3', '4', '5'].forEach((value) => secondList.append(value));

    firstList.extend(secondList);

    expect(firstList.length()).toBe(5);
    expect(firstList.get(0)).toBe('1');
    expect(firstList.get(1)).toBe('2');
    expect(firstList.get(2)).toBe('3');
    expect(firstList.get(3)).toBe('4');
    expect(firstList.get(4)).toBe('5');
  });

  test('should add elements from one list to the empty list', () => {
    const firstList = new CircularLinkedList();
    const secondList = new CircularLinkedList();
    ['3', '4', '5'].forEach((value) => secondList.append(value));

    firstList.extend(secondList);

    expect(firstList.length()).toBe(3);
    expect(firstList.get(0)).toBe('3');
    expect(firstList.get(1)).toBe('4');
    expect(firstList.get(2)).toBe('5');
  });

  test('should not affect the second list when manipulating the exteded list', () => {
    const firstList = new CircularLinkedList();
    ['1', '2'].forEach((value) => firstList.append(value));
    const secondList = new CircularLinkedList();
    ['3', '4', '5'].forEach((value) => secondList.append(value));

    firstList.extend(secondList);
    firstList.delete(0);

    expect(secondList.length()).toBe(3);
    expect(secondList.get(0)).toBe('3');
  });
});
