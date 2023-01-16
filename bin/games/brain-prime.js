#!/usr/bin/env node
import run from '../../src/index.js';
import getRandomNumber from '../../src/getRandomNumber.js';
import isPrime from '../../src/isPrime.js';

const MIN_NUM = 1;
const MAX_NUM = 100;
const startingText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRoundData() {
  /* creating question value */
  const value = getRandomNumber(MIN_NUM, MAX_NUM);
  const question = `${value}`;
  /* evaluating answer */
  const correctAnswer = isPrime(value) ? 'yes' : 'no';
  return [question, correctAnswer];
}

run(startingText, getRoundData);
