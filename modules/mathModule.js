// Part 7 (a)

import { toUpperCase } from './stringModule.js';

// Part 8 (b)

import { findMax } from './arrayModule.js';

// Part 2

export function add(a, b) {
    return a + b;
  }

export function subtract(a, b) {
    return a - b;
  }


// Part 5

export default function multiply(a, b){
  return a * b;
}
  
// Part 7 (b)

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}