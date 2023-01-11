import readLine from 'readline-sync'

const PROMPT = '>'

function greeting() {
  console.log('Welcome to the Brain Games!')
  const userName = readLine.question(`May I ask your name?\n${PROMPT}`)
  console.log(`Hello, ${userName}!`)
}

export { greeting }
