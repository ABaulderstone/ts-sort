import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const collection = new NumbersCollection([10, 3, -5, 0]);
collection.sort();
console.log(collection.data);

const charCollection = new CharactersCollection('Xaaybxakjls');
charCollection.sort();
console.log(charCollection.data);

const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);
list.sort();
list.print();

// const sorter = new Sorter(list);
// sorter.sort();
// list.print();
