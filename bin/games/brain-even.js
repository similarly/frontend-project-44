#!/usr/bin/env node
import { run } from '../index.js';

const startingText = 'Answer "yes" if the number is even, otherwise answer "no".';
let value;
const maxNum = 100;
/* get string representation of value for user */
function textValue() {
  return value;
}
/* evaluate correct answer */
function correctAnswer() {
  return value % 2 ? 'no' : 'yes';
}
/* set new value */
function newValue() {
  value = Math.floor(Math.random() * maxNum);
}
/* check correctness of answer */
function isCorrect(userAnswer) {
  return userAnswer === correctAnswer;
}

run(startingText, textValue, correctAnswer, newValue);
