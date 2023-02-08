//*Part 1*//
let operator = prompt(`Enter operator +, -, /, *`);
let num1 = Number(prompt(`Enter operand A`));
let num2 = Number(prompt(`Enter operand B`));
let plus = ((num1) + (num2));
let minus = ((num1) - (num2));
let divide = ((num1) / (num2));
let multiply = ((num1) * (num2));
const result = calc(operator, num1, num2);
alert(`${num1} ${operator} ${num2} = ${result}`)

// function validation(numbers) {
//     if (isNaN(numbers) === false)
//         return Number(prompt(`${validation(numbers)}`));
//     // else if (operator.includes(`+, -, /, *`))
//     //     return (prompt(`${numbers}`));
//     else alert('You must choose a number and operand!');
// }

function calc(operator) {
    switch (operator) {
        case '+':return (plus);

        case '-':return (minus);

        case '/':return (divide);

        case '*':return (multiply);
        default:
            alert('You must choose a number and operand!');
    }
}

//*Part 2*//
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
    prop3: function () {
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

console.log(obj.prop2 [3] ['property with spaces'].a.c.someProperty[0] ['prop name']); // I am a smart programmer
console.log(obj.prop3().bar.anotherBeautifulProp[1].target); // It was simple!


