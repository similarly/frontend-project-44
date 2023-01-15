#!/usr/bin/env node
import { run } from '../index.js';

const startingText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let value;
const maxNum = 100;
/* get string representation of value for user */
function textValue() {
  return value;
}
/* evaluate correct answer */
function correctAnswer() {
  return isPrime(value) ? 'yes' : 'no';
}
/* set new value */
function newValue() {
  value = Math.floor(Math.random() * maxNum);
}
/* check correctness of answer */
function isCorrect(userAnswer) {
  return userAnswer === correctAnswer;
}
function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

run(startingText, textValue, correctAnswer, newValue);
