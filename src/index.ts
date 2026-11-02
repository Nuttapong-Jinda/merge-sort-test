import { merge } from './merge';

const collection_1 = [1, 4, 7, 10];
const collection_2 = [2, 5, 8, 11];
const collection_3 = [12, 9, 6, 3, 0];

const mergedResult = merge(collection_1, collection_2, collection_3);

console.log('collection_1 (min -> max):', collection_1);
console.log('collection_2 (min -> max):', collection_2);
console.log('collection_3 (max -> min):', collection_3);
console.log('Merged Result (ascending):', mergedResult);