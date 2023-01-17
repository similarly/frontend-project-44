import run from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minStep = 3;
const maxStep = 9;
const minNum = 10;
const maxNum = 100;
const minLen = 5;
const maxLen = 15;
const description = 'What number is missing in the progression?';

function getProgression(length) {
  const firstNumber = getRandomNumber(minNum, maxNum);
  const step = getRandomNumber(minStep, maxStep);
  const progression = Array.from({ length }, (_, i) => firstNumber + step * i);
  return progression;
}

function getRoundData() {
  const length = getRandomNumber(minLen, maxLen);
  const progression = getProgression(length);
  const unknownIndex = getRandomNumber(0, length - 1);
  /* evaluating answer */
  const correctAnswer = progression[unknownIndex];
  /* creating question value */
  progression[unknownIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

export default function startProgressionGame() {
  run(description, getRoundData);
}
