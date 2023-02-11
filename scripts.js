let operator = ''
let numbersCount = 0
let operands = []
let result

do {
    operator = prompt(`Enter operator +, -, /, *`);
} while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*');

do {
    numbersCount = prompt(`Enter operands count`);
} while (numbersCount <= 1 || numbersCount > 5);

for (let i = 1; i <= numbersCount; i++) {
    let operand;
    do {
        operand = prompt(`Enter operand ` + i);
        operand = Number(operand);
    } while (isNaN(operand))

    operands.push(operand)
}

for (let i = 0; i < numbersCount - 1; i++) {
    if (i === 0) {
        result = operands[i]
    }

    result = doOperation(operator, result, operands[i + 1])
}

function doOperation(operator, firstNumber, secondNumber)
{
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
