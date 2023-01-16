#!/usr/bin/env node
import run from '../../src/index.js';
import getRandomNumber from '../../src/getRandomNumber.js';

const MIN_NUM = 1;
const MAX_NUM = 50;
const SIGNS = ['+', '-', '*'];
const startingText = 'What is the result of the expression?';

function getRoundData() {
  /* creating question value */
  let correctAnswer;
  const sign = SIGNS[getRandomNumber(0, SIGNS.length - 1)];
  const firstRand = getRandomNumber(MIN_NUM, MAX_NUM);
  const secondRand = getRandomNumber(MIN_NUM, sign === '-' ? firstRand : MAX_NUM); // ternary so that in case of substraction result will be positive
  const question = `${firstRand} ${sign} ${secondRand}`;
  /* evaluating answer */
  switch (sign) {
    case '+':
      correctAnswer = firstRand + secondRand;
      break;
    case '-':
      correctAnswer = firstRand - secondRand;
      break;
    case '*':
      correctAnswer = firstRand * secondRand;
      break;
    default:
  }
  return [question, correctAnswer];
}

run(startingText, getRoundData);
