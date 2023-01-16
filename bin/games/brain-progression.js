#!/usr/bin/env node
import run from '../../src/index.js';
import getRandomNumber from '../../src/getRandomNumber.js';

const MIN_STEP = 3;
const MAX_STEP = 9;
const MIN_NUM = 10;
const MAX_NUM = 100;
const MIN_LEN = 5;
const MAX_LEN = 15;
const startingText = 'What number is missing in the progression?';

function getRoundData() {
  const len = getRandomNumber(MIN_LEN, MAX_LEN);
  const firstNumber = getRandomNumber(MIN_NUM, MAX_NUM);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const unknownIndex = getRandomNumber(0, len - 1);
  const progression = Array.from({ length: len }, (_, i) => firstNumber + step * i);
  /* evaluating answer */
  const correctAnswer = progression[unknownIndex];
  /* creating question value */
  progression[unknownIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

run(startingText, getRoundData);
