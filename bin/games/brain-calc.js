const calc = {
  startingText: 'What is the result of the expression?',
  value: '',
  maxNum: 50,
  signs: ['+', '-', '*'],
  /* get string representation of value for user*/
  get textValue() {
    return this.value[0] + ' ' + this.value[2] + ' ' + this.value[1]
  },
  /* evaluate correct answer */
  get correctAnswer() {
    if (this.value[2] === '+') {
      return this.value[0] + this.value[1]
    } else if (this.value[2] === '-') {
      return this.value[0] - this.value[1]
    } else {
      return this.value[0] * this.value[1]
    }
  },
  /* set new value */
  newValue: function () {
    const firstRand = Math.floor(Math.random() * this.maxNum)
    const secondRand = Math.floor(Math.random() * biggerRand)
    const sign = this.signs[Math.floor(Math.random() * this.signs.length)]
    this.value = [firstRand, secondRand, sign]
  },
  /*check correctness of answer*/
  isCorrect: function (userAnswer) {
    return userAnswer == this.correctAnswer ? true : false
  },
}

export { calc as default }
