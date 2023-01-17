import run from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minNum = 1;
const maxNum = 50;
const signs = ['+', '-', '*'];
const description = 'What is the result of the expression?';

function calcExpression(firstNum, secondNum, sign) {
  switch (sign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error("Can't calculate expression, wrong sign.");
  }
}

function getRoundData() {
  /* creating question value */
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const firstNum = getRandomNumber(minNum, maxNum);
  const secondNum = getRandomNumber(minNum, sign === '-' ? firstNum : maxNum); // ternary so that in case of substraction result will be positive
  const question = `${firstNum} ${sign} ${secondNum}`;
  /* evaluating answer */
  const correctAnswer = calcExpression(firstNum, secondNum, sign);
  return [question, correctAnswer];
}

export default function startCalcGame() {
  run(description, getRoundData);
}
