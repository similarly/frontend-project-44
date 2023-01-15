#!/usr/bin/env node
import run from '../index.js';

const startingText = 'Answer "yes" if the number is even, otherwise answer "no".';
let value;
const maxNum = 100;
/* get string representation of value for user */
function formattedValue() {
  return value;
}
/* set new value */
function setValue() {
  value = Math.floor(Math.random() * maxNum);
}
/* evaluate correct answer */
function correctAnswer() {
  return value % 2 ? 'no' : 'yes';
}

run(startingText, formattedValue, correctAnswer, setValue);
