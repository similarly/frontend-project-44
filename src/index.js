import readLine from 'readline-sync';

export default function run(startingText, getRoundData) {
  const TRIES = 3;
  let userName;
  function startRound() {
    /* get new round data */
    const [question, correctAnswer] = getRoundData();
    /* ask and get answer */
    console.log(`Question: ${question}`);
    const userAnswer = readLine.question('Your answer: ');
    /* check answer correctness */
    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  /* greet and set userName */
  console.log('Welcome to the Brain Games!');
  userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  /* initiate game */
  console.log(startingText);
  /* run 3 rounds */
  for (let i = 0; i < TRIES; i += 1) {
    if (!startRound()) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
