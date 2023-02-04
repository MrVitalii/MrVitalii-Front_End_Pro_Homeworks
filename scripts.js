let operator = prompt(`Enter operator +, -, /, *`);
let num1 = prompt(`Enter operand A`);
let num2 = prompt(`Enter operand B`);
let plus = (Number(num1) + Number(num2));
let minus = (Number(num1) - Number(num2));
let divide = (Number(num1) / Number(num2));
let multiply = (Number(num1) * Number(num2));

switch (operator) {
    case '+':
        alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + plus);
        break;
    case '-':
        alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + minus);
        break;
    case '/':
        alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + divide);
        break;
    case '*':
        alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + multiply);
        break;
    default:
        alert('You must choose a number and operand!');
}


