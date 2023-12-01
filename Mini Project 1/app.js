let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
    }
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        currentInput += ' ' + op + ' ';
        updateDisplay();
    }
}

function calculateResult() {
    const parts = currentInput.split(' ');
    if (parts.length === 3) {
        const num1 = parseFloat(parts[0]);
        const op = parts[1];
        const num2 = parseFloat(parts[2]);

        switch (op) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                currentInput = (num1 / num2).toString();
                break;
            default:
                currentInput = 'Error';
        }

        updateDisplay();
        resultDisplayed = true;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    resultDisplayed = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
