/* eslint-disable prefer-destructuring */
import getRandomNumber from '../../../help_modules/getRandomNumber';
import randomFromArray from '../../../help_modules/getRandomFromArray';

export default function generateMathExpression(maxValue) {
  const firstArgument = getRandomNumber(maxValue);
  let secondArgument = getRandomNumber(maxValue);
  let answer = 0;
  let expression = 0;

  const mathOperators = ['/', '*', '+', '-'];
  const operation = randomFromArray(mathOperators, getRandomNumber);

  switch (operation) {
    case '+':
      answer = firstArgument + secondArgument;
      break;
    case '-':
      answer = firstArgument - secondArgument;
      break;
    case '*':
      answer = firstArgument * secondArgument;
      break;
    case '/':
      while (secondArgument === 0) {
        secondArgument = getRandomNumber(maxValue);
      }
      answer = Math.floor(firstArgument / secondArgument);
      break;
    default:
  }

  expression = `${firstArgument} ${operation} ${secondArgument} = `;

  return [expression, answer];
}
