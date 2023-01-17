import readLine from 'readline-sync';

export default function run(description, getRoundData) {
  /* greet and set userName */
  const tries = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  /* initiate game */
  console.log(description);
  /* run 3 rounds */
  for (let i = 0; i < tries; i += 1) {
    /* get new round data */
    const [question, correctAnswer] = getRoundData();
    /* ask and get answer */
    console.log(`Question: ${question}`);
    const userAnswer = readLine.question('Your answer: ');
    /* if answer not correct - print message and return function */
    if (userAnswer !== correctAnswer.toString()) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  /* if loop successfully finishes - print congrats */
  console.log(`Congratulations, ${userName}!`);
}
