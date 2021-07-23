/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  switch (operation) {
    case 'X':
      result = num1.times(num2);
      break;
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case '÷':
      result = num1.div(num2);
      break;
    case '%':
      result = num1.times(0.1);
      break;
    default:
      break;
  }
  return result.toString();
};

export default operate;
