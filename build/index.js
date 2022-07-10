"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const collection = new NumbersCollection([10, 3, -5, 0]);
const collection = new CharactersCollection_1.CharactersCollection('XazYbLs');
console.log(collection);
const sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log(collection.data);
