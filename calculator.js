let display = document.getElementById('display');
let currentInput = '0';
let currentOperation = '';
let firstOperand = 0;

function clearDisplay() {
    currentInput = '0';
    currentOperation = '';
    firstOperand = 0;
    updateDisplay();
}

function appendDigit(digit) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== '') {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    currentInput = '0';
    currentOperation = operation;
    updateDisplay();
}

function calculate() {
    if (currentOperation === '') {
        return;
    }
    const secondOperand = parseFloat(currentInput);
    switch (currentOperation) {
        case '+':
            currentInput = (firstOperand + secondOperand).toString();
            break;
        case '-':
            currentInput = (firstOperand - secondOperand).toString();
            break;
        case '*':
            currentInput = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand !== 0) {
                currentInput = (firstOperand / secondOperand).toString();
            } else {
                currentInput = 'Error';
            }
            break;
        default:
            break;
    }
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
