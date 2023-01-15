#!/usr/bin/env node
import run from '../index.js';

const startingText = 'What number is missing in the progression?';
let value;
let unknownIndex;
const maxLen = 15;
const minLen = 5;
/* get string representation of value for user */
function formattedValue() {
  const unknownElementArray = Array.from(value);
  unknownElementArray[unknownIndex] = '..';
  return unknownElementArray.join(' ');
}
/* set new value */
function setValue() {
  const arrLength = Math.floor(Math.random() * (maxLen - minLen) + minLen);
  const startNumber = Math.floor(Math.random() * 30) + 1;
  const step = Math.floor(Math.random() * 9) + 1;
  /* create progression */
  value = Array.from({ length: arrLength }, (_, i) => startNumber + step * i);
  /* choose random unknown element */
  unknownIndex = Math.floor(Math.random() * value.length);
}
/* evaluate correct answer */
function correctAnswer() {
  return value[unknownIndex];
}

run(startingText, formattedValue, correctAnswer, setValue);
