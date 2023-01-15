import readLine from 'readline-sync';
import greet from './cli.js';

export default function run(startingText, formattedValue, correctAnswer, setValue) {
  let wins = 0;
  const userName = greet();
  const TRIES = 3;
  const NEEDED_WINS = 3;

  function roundStart() {
    /* set new random value */
    setValue();
    /* ask and get answer */
    console.log(`Question: ${formattedValue()}`);
    const userAnswer = readLine.question('Your answer: ');
    /* check answer correctness */
    if (userAnswer === correctAnswer().toString()) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  /* initiate game */
  console.log(startingText);
  /* run 3 rounds */
  for (let i = 0; i < TRIES; i += 1) {
    if (roundStart()) {
      wins += 1;
    } else {
      break;
    }
  }
  /* check amount of wins */
  if (wins === NEEDED_WINS) {
    console.log(`Congratulations, ${userName}!`);
  }
}
