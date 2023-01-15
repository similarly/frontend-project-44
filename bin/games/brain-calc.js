#!/usr/bin/env node
import { run } from '../index.js';

const startingText = 'What is the result of the expression?';
const maxNum = 50;
const signs = ['+', '-', '*'];
let value;
/* get string representation of value for user */
function textValue() {
  return `${value[0]} ${value[2]} ${value[1]}`;
}
/* evaluate correct answer */
function correctAnswer() {
  if (value[2] === '+') {
    return value[0] + value[1];
  }
  if (value[2] === '-') {
    return value[0] - value[1];
  }
  return value[0] * value[1];
}
/* set new value */
function newValue() {
  const sign = signs[Math.floor(Math.random() * signs.length)];
  const firstRand = Math.floor(Math.random() * maxNum);
  const secondRand = Math.floor(Math.random() * (sign === '-' ? firstRand : maxNum)); // ternary so that in case of substraction result will be positive
  value = [firstRand, secondRand, sign];
}

run(startingText, textValue, correctAnswer, newValue);
