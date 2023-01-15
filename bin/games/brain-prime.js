const prime = {
    startingText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    value: '',
    maxNum: 100,
    /* get string representation of value for user */
    get textValue() {
      return this.value
    },
    /* evaluate correct answer */
    get correctAnswer() {
      return this.isPrime(this.value) ? 'yes' : 'no'
    },
    /* set new value */
    newValue: function () {
      this.value = Math.floor(Math.random() * this.maxNum)
    },
    /*check correctness of answer*/
    isCorrect: function (userAnswer) {
      return userAnswer == this.correctAnswer ? true : false
    },
    isPrime: function(number) {
        for (let i = 2, s = Math.sqrt(number); i <= s; i++)
          if (number % i === 0) return false;
        return number > 1;
      }
  }
  
  export { prime as default }
  