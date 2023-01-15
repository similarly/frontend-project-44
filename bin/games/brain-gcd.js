#!/usr/bin/env node
import { run } from '../index.js';

const startingText = 'Find the greatest common divisor of given numbers.';
let value;
const maxNum = 100;
/* get string representation of value */
function textValue() {
  return `${value[0]} ${value[1]}`;
}
/* evaluate correct answer */
function correctAnswer() {
  return gcd(value[0], value[1]);
}
/* set new value */
function newValue() {
  /* -1 +1 so that  values are natural numbers */
  const firstNum = Math.floor(Math.random() * (maxNum - 1)) + 1;
  const secondNum = Math.floor(Math.random() * (firstNum - 1)) + 1;
  value = [firstNum, secondNum];
}
/* check correctness of answer */
function isCorrect(userAnswer) {
  return userAnswer === correctAnswer.toString();
}
/* greatest common divisor algorithm */
function gcd(first, second) {
  if (second === 0) {
    return first;
  }
  return gcd(second, first % second);
}

run(startingText, textValue, correctAnswer, newValue);
