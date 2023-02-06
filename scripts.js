let operator = prompt(`Enter operator +, -, /, *`);
let num1 = Number(prompt(`Enter operand A`));
let num2 = Number(prompt(`Enter operand B`));
let plus = ((num1) + (num2));
let minus = ((num1) - (num2));
let divide = ((num1) / (num2));
let multiply = ((num1) * (num2));

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
vgv

