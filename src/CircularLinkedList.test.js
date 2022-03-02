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
  test('should throw an error when accessing an element with index which not exists', () => {
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
