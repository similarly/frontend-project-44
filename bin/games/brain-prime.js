#!/usr/bin/env node
import { session } from '../index.js';

const prime = {
  startingText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  value: undefined,
  maxNum: 100,
  /* get string representation of value for user */
  get textValue() {
    return this.value;
  },
  /* evaluate correct answer */
  get correctAnswer() {
    return this.isPrime(this.value) ? 'yes' : 'no';
  },
  /* set new value */
  newValue() {
    this.value = Math.floor(Math.random() * this.maxNum);
  },
  /* check correctness of answer */
  isCorrect(userAnswer) {
    return userAnswer === this.correctAnswer;
  },
  isPrime(number) {
    for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  },
};

session.greet();
session.run(prime);
