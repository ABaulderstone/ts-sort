import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

// const collection = new NumbersCollection([10, 3, -5, 0]);

const collection = new CharactersCollection('XazYbLs');

console.log(collection);

const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);
