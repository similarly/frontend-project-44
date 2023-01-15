#!/usr/bin/env node
import { session } from '../index.js';

const calc = {
  startingText: 'What is the result of the expression?',
  value: undefined,
  maxNum: 50,
  signs: ['+', '-', '*'],
  /* get string representation of value for user */
  get textValue() {
    return `${this.value[0]} ${this.value[2]} ${this.value[1]}`;
  },
  /* evaluate correct answer */
  get correctAnswer() {
    if (this.value[2] === '+') {
      return this.value[0] + this.value[1];
    }
    if (this.value[2] === '-') {
      return this.value[0] - this.value[1];
    }
    return this.value[0] * this.value[1];
  },
  /* set new value */
  newValue() {
    const sign = this.signs[Math.floor(Math.random() * this.signs.length)];
    const firstRand = Math.floor(Math.random() * this.maxNum);
    const secondRand = Math.floor(
      Math.random() * (sign === '-' ? firstRand : this.maxNum)
    ); // ternary so that in case of substraction result will be positive
    this.value = [firstRand, secondRand, sign];
  },
  /* check correctness of answer */
  isCorrect(userAnswer) {
    return userAnswer === this.correctAnswer.toString();
  },
};

session.greet();
session.run(calc);
