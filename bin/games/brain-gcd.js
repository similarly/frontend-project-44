#!/usr/bin/env node
import run from '../index.js';

const startingText = 'Find the greatest common divisor of given numbers.';
let value;
const maxNum = 100;
/* get string representation of value */
function formattedValue() {
  return `${value[0]} ${value[1]}`;
}
/* greatest common divisor algorithm */
function gcd(first, second) {
  if (second === 0) {
    return first;
  }
  return gcd(second, first % second);
}
/* set new value */
function setValue() {
  /* -1 +1 so that  values are natural numbers */
  const firstNum = Math.floor(Math.random() * (maxNum - 1)) + 1;
  const secondNum = Math.floor(Math.random() * (firstNum - 1)) + 1;
  value = [firstNum, secondNum];
}
/* evaluate correct answer */
function correctAnswer() {
  return gcd(value[0], value[1]);
}

run(startingText, formattedValue, correctAnswer, setValue);
