// *Part 1*
//
// let operator = prompt(`Enter operator +, -, /, *`);
// let num1 = Number(prompt(`Enter operand A`));
// let num2 = Number(prompt(`Enter operand B`));
// let plus = ((num1) + (num2));
// let minus = ((num1) - (num2));
// let divide = ((num1) / (num2));
// let multiply = ((num1) * (num2));
//
// switch (operator) {
//     case '+': alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + plus);
//         break;
//     case '-': alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + minus);
//         break;
//     case '/': alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + divide);
//         break;
//     case '*': alert(num1 + " " + operator + " " + num2 + " " + "=" + " " + multiply);
//         break;
//     default:
//         alert('You must choose a number and operand!');
// }

// *Part 2*
const obj = {
    prop: '42',
    prop2: [8, 9, 10, {
        beautifulPropertyName: 88,
        'property with spaces': {
            a: {
                b: '',
                c: {
                    someProperty: [{
                        'prop name': 'I am a smart programmer',
                    }],
                },
            },
        },
    }],
    prop3: function() {
        return {
            baz: 'Hello',
            bar: {
                anotherBeautifulProp: [8, {
                    target: 'It was simple!',
                    qwe: [8, 17, 37],
                }],
            },
        };
    },
};

console.log(obj. prop2 [3] ['property with spaces'].a.c.someProperty[0] ['prop name']) ; // I am a smart programmer
console.log(obj. prop3(). bar. anotherBeautifulProp[1].target); // It was simple!


