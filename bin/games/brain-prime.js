#!/usr/bin/env node
import run from '../index.js';

const startingText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let value;
const maxNum = 100;
/* get string representation of value for user */
function formattedValue() {
  return value;
}
function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
/* set new value */
function setValue() {
  value = Math.floor(Math.random() * maxNum);
}
/* evaluate correct answer */
function correctAnswer() {
  return isPrime(value) ? 'yes' : 'no';
}

run(startingText, formattedValue, correctAnswer, setValue);
