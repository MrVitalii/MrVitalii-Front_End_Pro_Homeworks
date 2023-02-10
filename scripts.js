let operator = prompt(`Enter operator +, -, /, *`);
let num1 = Number(prompt(`Enter operand A`));
let num2 = Number(prompt(`Enter operand B`));
let num3 = Number(prompt(`Enter operand С`));
let num4 = Number(prompt(`Enter operand D`))
let num5 = Number(prompt(`Enter operand E`));



const result = calc(operator, num1, num2,num3,num4,num5);
ViewResults(num1,operator, num2, operator,num3,operator,num4,operator,num5,result)


do {
    operator = prompt('Enter operator');
}
while (operator !== '+')


function plus(num1,num2,num3, num4,num5,) { return num1 + num2 + num3 + num4 + num5;
}

function minus(num1,num2,num3,num4,num5,) { return num1 - num2- num3 - num4 - num5;
}

function divide(num1,num2,num3,num4,num5,) { return num1 / num2 / num3 / num4 / num5;
}

function multiply(num1,num2,num3,num4,num5,) { return num1 * num2 * num3 * num4 * num5;
}

function calc(operator) {
    switch (operator) {
        case '+':
            return plus(num1, num2);

        case '-':
            return minus(num1, num2);

        case '/':
            return divide(num1, num2);

        case '*':
            return multiply(num1, num2);
    }
}

function ViewResults(operator, num1, num2, result) {
    alert(`${operator} ${num1} ${num2} = ${result}`)
}