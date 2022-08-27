import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const collection = new NumbersCollection([10, 3, -5, 0]);

// const collection = new CharactersCollection('XazYbLs');

// console.log(collection);

// const sorter = new Sorter(collection);
// sorter.sort();
// console.log(collection.data);

const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);

const sorter = new Sorter(list);
sorter.sort();
list.print();
