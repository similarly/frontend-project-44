#!/usr/bin/env node
import run from '../../src/index.js';
import getRandomNumber from '../../src/getRandomNumber.js';
import greatestCommonDivisor from '../../src/greatestCommonDivisor.js';

const MIN_NUM = 1;
const MAX_NUM = 100;
const startingText = 'Find the greatest common divisor of given numbers.';

function getRoundData() {
  /* creating question value */
  const firstNum = getRandomNumber(MIN_NUM, MAX_NUM);
  const secondNum = getRandomNumber(MIN_NUM, MAX_NUM);
  const question = `${firstNum} ${secondNum}`;
  /* evaluating answer */
  const correctAnswer = greatestCommonDivisor(firstNum, secondNum);
  return [question, correctAnswer];
}

run(startingText, getRoundData);
