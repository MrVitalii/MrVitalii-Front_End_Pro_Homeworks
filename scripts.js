let operator = prompt(`Enter operator +, -, /, *`);
let num1 = prompt(`Enter operand A`);
let num2 = prompt(`Enter operand B`);
switch (operator) {
    case '+':
        alert(Number(num1) + Number(num2));
        break;
    case '-':
        alert(Number(num1) - Number(num2));
        break;
    case '/':
        alert(Number(num1) / Number(num2));
        break;
    case '*':
        alert(Number(num1) * Number(num2));
        break;
    default:
        alert('You must choose a number!');
}

