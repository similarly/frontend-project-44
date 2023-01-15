import readLine from 'readline-sync';

export function greet() {
  console.log('Welcome to the Brain Games!');
  this.userName = readLine.question('May I ask your name?\n');
  console.log(`Hello, ${this.userName}!`);
}
