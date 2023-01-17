import run from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minNum = 1;
const maxNum = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function getRoundData() {
  /* creating question number */
  const number = getRandomNumber(minNum, maxNum);
  const question = `${number}`;
  /* evaluating answer */
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function startPrimeGame() {
  run(description, getRoundData);
}
