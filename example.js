const CircularLinkedList = require('./src/CircularLinkedList');

const list = new CircularLinkedList();

const values = ['1', '2', '2', '3', '4'];

values.forEach((value) => list.append(value)); // '1' -> '2' -> '2' -> '3' -> '4'

list.append('5'); // '1' -> '2' -> '2' -> '3' -> '4' -> '5'
list.append('6'); // '1' -> '2' -> '2' -> '3' -> '4' -> '5' -> '6'
list.append('6'); // '1' -> '2' -> '2' -> '3' -> '4' -> '5' -> '6' -> '6'

list.get(1); // '2'

list.length(); // 8

list.insert('4', list.length() - 1); // '1' -> '2' -> '2' -> '3' -> '4' -> '5' -> '6' -> '4' -> '6'

list.delete(0); // '2' -> '2' -> '3' -> '4' -> '5' -> '6' -> '4' -> '6'

list.deleteAll('2'); // '3' -> '4' -> '5' -> '6' -> '4' -> '6'

list.findFirst('6'); // 3

list.findLast('6'); // 5

const secondList = new CircularLinkedList();
secondList.append('1'); // '1'
secondList.append('2'); // '1' -> '2'

list.extend(secondList); // '3' -> '4' -> '5' -> '6' -> '4' -> '6' -> '1' -> '2'

list.reverse(); // '2' -> '1' -> '6' -> '4' -> '6' -> '5' -> '4' -> '3'

list.print();
