export default function gcd(firstNum, secondNum) {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
}
