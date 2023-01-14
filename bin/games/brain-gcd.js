const greatestCommonDivisor = {
  startingText: 'Answer "yes" if the number is even, otherwise answer "no".',
  value: '',
  maxNum: 100,
  /* get string representation of value */
  get textValue() {
    return this.value[0] + ' ' + this.value[1]
  },
  /* evaluate correct answer */
  get correctAnswer() {
    return this.gcd(this.value[0], this.value[1])
  },
  /* set new value */
  newValue: function () {
    /* -1 +1 so that  values are natural numbers */
    const firstNum = Math.floor(Math.random() * (this.maxNum - 1)) + 1
    const secondNum = Math.floor(Math.random() * (firstNum - 1)) + 1
    this.value = [firstNum, secondNum]
  },
  /*check correctness of answer*/
  isCorrect: function (userAnswer) {
    return userAnswer == this.correctAnswer ? true : false
  },
  /* greatest common divisor algorith */
  gcd: function (first, second) {
    if (second === 0) {
      return first
    }
    return this.gcd(second, first % second)
  },
}

export { greatestCommonDivisor as default }
