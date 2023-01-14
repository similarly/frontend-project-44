const calc = {
  startingText: 'What is the result of the expression?',
  value: '',
  maxNum: 50,
  signs: ['+', '-', '*'],
  /* get string representation of value */
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
    const biggerRand = Math.floor(Math.random() * this.maxNum)
    this.value = [
      biggerRand,
      Math.floor(Math.random() * biggerRand),
      this.signs[Math.floor(Math.random() * this.signs.length)],
    ]
  },
  /* check if user answer is equal to correct answer */
  isCorrect: function (userAnswer) {
    return (userAnswer == this.correctAnswer) ? true : false
  },
}

export { calc as default }
