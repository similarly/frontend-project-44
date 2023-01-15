const numberParity = {
  startingText: 'Answer "yes" if the number is even, otherwise answer "no".',
  value: undefined,
  maxNum: 100,
  /* get string representation of value for user */
  get textValue() {
    return this.value;
  },
  /* evaluate correct answer */
  get correctAnswer() {
    return this.value % 2 ? 'no' : 'yes';
  },
  /* set new value */
  newValue() {
    this.value = Math.floor(Math.random() * this.maxNum);
  },
  /* check correctness of answer */
  isCorrect(userAnswer) {
    return userAnswer === this.correctAnswer;
  },
};

export { numberParity };
