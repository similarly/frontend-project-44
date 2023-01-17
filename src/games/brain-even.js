import run from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minNum = 1;
const maxNum = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  if (number % 2) {
    return false;
  }
  return true;
}

function getRoundData() {
  /* creating question number */
  const number = getRandomNumber(minNum, maxNum);
  const question = `${number}`;
  /* evaluating answer */
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function startEvenGame() {
  run(description, getRoundData);
}
