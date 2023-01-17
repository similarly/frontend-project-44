import run from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minNum = 1;
const maxNum = 100;
const description = 'Find the greatest common divisor of given numbers.';

function getGreatestCommonDivisor(firstNum, secondNum) {
  if (secondNum === 0) {
    return firstNum;
  }
  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
}

function getRoundData() {
  /* creating question value */
  const firstNum = getRandomNumber(minNum, maxNum);
  const secondNum = getRandomNumber(minNum, maxNum);
  const question = `${firstNum} ${secondNum}`;
  /* evaluating answer */
  const correctAnswer = getGreatestCommonDivisor(firstNum, secondNum);
  return [question, correctAnswer];
}

export default function startGcdGame() {
  run(description, getRoundData);
}
