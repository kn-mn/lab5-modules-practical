//

import { add, subtract } from '../modules/mathModule.js';
import { toLowerCase , toUpperCase } from '../modules/stringModule.js';

//

import { findMax , reverseArray } from '../modules/arrayModule.js'

//

console.log('add: ', add(2, 2));
console.log('subtract', subtract(2,2));
console.log('toUppercase: ', toUpperCase('testing'));
console.log('toLowerCase: ', toLowerCase('TESTING'));

//

console.log('max: ', findMax([1, 2, 3, 4, 5]));
console.log('reversed: ', reverseArray([1, 2, 3]));

//

import { addAndLogUpper } from '../modules/mathModule.js';
addAndLogUpper(10, 20)

//

import { numMaxMultiplyUppercase } from '../modules/mathModule.js';
numMaxMultiplyUppercase([0,1,1,2,3,5,8,13]);