import readLine from 'readline-sync'

export default function greet() {
  console.log('Welcome to the Brain Games!')
  this.userName = readLine.question(`May I ask your name?\n${this.PROMPT}`)
  console.log(`Hello, ${this.userName}!`)
}
