let currentInput = '';
let operator = '';
let previousInput = '';

const resultElement = document.getElementById('result');

const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.value;

    if (value === 'AC') {
      currentInput = '';
      previousInput = '';
      operator = '';
      resultElement.value = '';
    } else if (value === 'DE') {
      currentInput = currentInput.slice(0, -1);
      resultElement.value = currentInput;
    } else if (value === '=' && previousInput && operator) {
      currentInput = calculate(previousInput, currentInput, operator);
      resultElement.value = currentInput;
      previousInput = '';
      operator = '';
    } else if (['+', '-', 'X', '/'].includes(value)) {
      if (previousInput) {
        currentInput = calculate(previousInput, currentInput, operator);
        resultElement.value = currentInput;
      }
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else {
      currentInput += value;
      resultElement.value = currentInput;
    }
  });
});

function calculate(num1, num2, operator) {
  let result;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case 'X':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
    default:
      return num2;
  }
  
  return result.toString();
}