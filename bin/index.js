import greet from './cli.js'
import numberParity from './games/brain-even.js'
import calc from './games/brain-calc.js'
import greatestCommonDivisor from './games/brain-gcd.js'
import arithProgression from './games/brain-progression.js'
import prime from './games/brain-prime.js'

import readLine from 'readline-sync'

const session = {
  NEEDED_WINS: 3,
  TRIES: 3,
  PROMPT: '>',
  greet,
  /* game logic */
  run: function (game) {
    let wins = 0
    const roundStart = () => {
      /* set new random value */
      game.newValue()
      /* ask and get answer */
      console.log(`Question: ${game.textValue}`)
      const userAnswer = readLine.question(`Your answer: ${this.PROMPT}`)
      /* check answer correctness */
      if (game.isCorrect(userAnswer)) {
        console.log('Correct!')
        wins += 1
      } else {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'.`
        )
      }
    }
    /* initiate game */
    console.log(game.startingText)
    /* run 3 rounds */
    for (let i = 0; i < this.TRIES; i += 1) {
      roundStart()
    }
    /* check amount of wins */
    if (wins === this.NEEDED_WINS) {
      console.log(`Congratulations, ${this.userName}!`)
    }
    console.log('\n')
  },
}

/* get userName */
session.greet()

/* run games */
// session.run(numberParity)
// session.run(calc)
// session.run(greatestCommonDivisor)
// session.run(arithProgression)
session.run(prime)