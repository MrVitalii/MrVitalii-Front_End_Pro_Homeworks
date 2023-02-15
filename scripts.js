const operator = getAction();
const numbersCount = getOperandsCount();
const operands = enterOperands(numbersCount);
const result = doCalculationAllOperands(operands, operator);

function getAction() {
    let operator = ''
    do {
        operator = prompt('Enter operator +, -, /, *');
    } while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*');
    return operator
}

function getOperandsCount() {
    let numbersCount = 0
    do {
        numbersCount = Number(prompt('Enter operands count'));
    } while (numbersCount <= 1 || numbersCount > 4 || isNaN(numbersCount));
    return numbersCount
}

function enterOperands(numbersCount) {
    let operands = [];
    for (let i = 1; i <= numbersCount; i++) {
        let operand
        do {
            operand = prompt(`Enter operand ` + i);
            operand = Number(operand);
        } while (isNaN(operand))
        operands.push(operand)
    }

    return operands;
}

function doCalculationAllOperands(operands, operator) {
    let result;

    for (let i = 0; i < numbersCount - 1; i++) {
        if (i === 0) {
            result = operands[i]
        }
        result = calculate(operator, result, operands[i + 1])
    }

    return result;
}

function calculate(operator, firstNumber, secondNumber) {
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber
            break;
        case '-':
            result = firstNumber - secondNumber
            break;
        case '/':
            result = firstNumber / secondNumber
            break;
        case '*':
            result = firstNumber * secondNumber
            break;
    }

    return result
}

alert(operands.join(operator) + '=' + result)

