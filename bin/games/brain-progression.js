const arithProgression = {
  startingText: 'What number is missing in the progression?',
  value: undefined,
  unknownIndex: undefined,
  maxLen: 15,
  minLen: 5,
  /* get string representation of value for user */
  get textValue() {
    const unknownElementArray = Array.from(this.value);
    unknownElementArray[this.unknownIndex] = '..';
    return unknownElementArray.join(' ');
  },
  /* evaluate correct answer */
  get correctAnswer() {
    return this.value[this.unknownIndex];
  },
  /* set new value */
  newValue() {
    const arrLength = Math.floor(
      Math.random() * (this.maxLen - this.minLen) + this.minLen
    );
    const startNumber = Math.floor(Math.random() * 30) + 1;
    const step = Math.floor(Math.random() * 9) + 1;
    /* create progression */
    this.value = Array.from({ length: arrLength }, (_, i) => startNumber + step * i);
    /* choose random unknown element */
    this.unknownIndex = Math.floor(Math.random() * this.value.length);
  },
  /* check correctness of answer */
  isCorrect(userAnswer) {
    return userAnswer === this.value[this.unknownIndex].toString();
  },
};

export { arithProgression };
