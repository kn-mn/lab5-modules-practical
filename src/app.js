// Part 2 (a)

import { add, subtract } from '../modules/mathModule.js';

// Part 3 (a)

import { toLowerCase , toUpperCase } from '../modules/stringModule.js';

// Part 5 (a)

import multiply from '../modules/mathModule.js';

// Part 6 (a)

import { findMax , reverseArray } from '../modules/arrayModule.js';

// Part 7 (a)

import { addAndLogUpper } from '../modules/mathModule.js';

// Part 8 (b)

import { numMaxMultiplyUppercase } from '../modules/mathModule.js';

// Part 2 (b)

console.log('add: ', add(2, 2));
console.log('subtract', subtract(2,2));

// Part 5 (b)

console.log('multiply: ', multiply(4, 5));

// Part 3 (b)

console.log('toUppercase: ', toUpperCase('testing'));
console.log('toLowerCase: ', toLowerCase('TESTING'));

// Part 6 (b)

console.log('max: ', findMax([1, 2, 3, 4, 5]));
console.log('reversed: ', reverseArray([1, 2, 3]));

// Part 7 (b)

addAndLogUpper(10, 20);

// Part 8 (b)

numMaxMultiplyUppercase([0,1,1,2,3,5,8,13]);