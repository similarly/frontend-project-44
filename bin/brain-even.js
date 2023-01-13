import readLine from 'readline-sync'

const PROMPT = '>'

function numberParity(userName) {
    const TRIES = 3
    let wins = 0
  
    function guessNumber() {
      const randNumber = Math.floor(Math.random() * 100)
      console.log(`Question: ${randNumber}`)
      const userAnswer = readLine.question(`Your answer: ${PROMPT}`)
      if (
        (userAnswer === 'yes' && !(randNumber % 2)) ||
        (userAnswer === 'no' && randNumber % 2)
      ) {
        console.log('Correct!')
        wins += 1
      } else {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${
            randNumber % 2 ? 'no' : 'yes'
          }'.`
        )
      }
    }
  
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
  
    for (let i = 0; i < TRIES; i += 1) {
      guessNumber()
    }
  
    if (wins === 3) {
      console.log(`Congratulations, ${userName}!`)
    }
  }

export { numberParity }