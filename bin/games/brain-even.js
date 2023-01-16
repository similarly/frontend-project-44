#!/usr/bin/env node
import run from '../../src/index.js';
import getRandomNumber from '../../src/getRandomNumber.js';

const MIN_NUM = 1;
const MAX_NUM = 100;
const startingText = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRoundData() {
  /* creating question value */
  const value = getRandomNumber(MIN_NUM, MAX_NUM);
  const question = `${value}`;
  /* evaluating answer */
  const correctAnswer = value % 2 ? 'no' : 'yes';
  return [question, correctAnswer];
}

run(startingText, getRoundData);
