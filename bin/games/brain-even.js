const numberParity = {
  startingText: 'Answer "yes" if the number is even, otherwise answer "no".',
  value: '',
  maxNum: 100,
  /* get string representation of value */
  get textValue() {
    return this.value
  },
  /* evaluate correct answer */
  get correctAnswer() {
    return this.value % 2 ? 'no' : 'yes'
  },
  /* set new value */
  newValue: function () {
    this.value = Math.floor(Math.random() * this.maxNum)
  },
  /*check correctness of answer*/
  isCorrect: function (userAnswer) {
    return (userAnswer === this.correctAnswer)
      ? true
      : false
  },
}

export { numberParity as default}
