//

export function add(a, b) {
    return a + b;
  }
  
//

export function subtract(a, b) {
    return a - b;
  }
  
//

import { toUpperCase } from './stringModule.js';

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

import { findMax } from './arrayModule.js';

export function numMaxMultiplyUppercase(arr){
    const mid = Math.floor(arr.length/2);
    const midNum = arr[mid];
    const numToMaxMultiply = (findMax(arr) * midNum);
    console.log(toUpperCase(numToMaxMultiply.toString()));
}