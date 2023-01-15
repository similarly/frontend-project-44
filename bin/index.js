import readLine from 'readline-sync';
import { greet } from './cli.js';

export function run(game) {
  let wins = 0;
  const userName = greet()
  const TRIES = 3
  const NEEDED_WINS = 3
  function roundStart() {
      /* set new random value */
      game.newValue();
      /* ask and get answer */
      console.log(`Question: ${game.textValue}`);
      const userAnswer = readLine.question(`Your answer: `);
      /* check answer correctness */
      if (game.isCorrect(userAnswer)) {
        console.log('Correct!');
        return true;
      }
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return false;
    };
    
    /* initiate game */
    console.log(game.startingText);
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
// export const session = {
//   NEEDED_WINS: 3,
//   TRIES: 3,
//   greet,
//   PROMPT: '',
//   /* game logic */
//   run(game) {
//     let wins = 0;
//     const roundStart = () => {
//       /* set new random value */
//       game.newValue();
//       /* ask and get answer */
//       console.log(`Question: ${game.textValue}`);
//       const userAnswer = readLine.question(`Your answer: ${this.PROMPT}`);
//       /* check answer correctness */
//       if (game.isCorrect(userAnswer)) {
//         console.log('Correct!');
//         return true;
//       }
//       console.log(
//         `'${userAnswer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'.`
//       );
//       console.log(`Let's try again, ${this.userName}!`);
//       return false;
//     };
//     /* initiate game */
//     console.log(game.startingText);
//     /* run 3 rounds */
//     for (let i = 0; i < this.TRIES; i += 1) {
//       if (roundStart()) {
//         wins += 1;
//       } else {
//         break;
//       }
//     }
//     /* check amount of wins */
//     if (wins === this.NEEDED_WINS) {
//       console.log(`Congratulations, ${this.userName}!`);
//     }
//   },
// };
