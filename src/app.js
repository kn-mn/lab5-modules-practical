// Part 4 (a)

import { add, subtract } from '../modules/mathModule.js';
import { toLowerCase , toUpperCase } from '../modules/stringModule.js';

// Part 5 (a)

import multiply from '../modules/mathModule.js';

// Part 6 (a)

import { findMax , reverseArray } from '../modules/arrayModule.js';

// Part 7 (a)

import { addAndLogUpper } from '../modules/mathModule.js';

// Part 4 (b)

console.log('add: ', add(2, 2));
console.log('subtract', subtract(2,2));

console.log('toUppercase: ', toUpperCase('testing'));
console.log('toLowerCase: ', toLowerCase('TESTING'));

// Part 5 (b)

console.log('multiply: ', multiply(4, 5));

// Part 6 (b)

console.log('max: ', findMax([1, 2, 3, 4, 5]));
console.log('reversed: ', reverseArray([1, 2, 3]));

// Part 7 (b)

addAndLogUpper(10, 20);

// Part 8

const finalChallenge = [0,1,1,2,3,5,8,13];
let midNum = Math.floor(finalChallenge.length/2);
let maxNum = findMax(finalChallenge);
let multipliedNum = multiply(maxNum, midNum);
console.log(toUpperCase(multipliedNum.toString()));