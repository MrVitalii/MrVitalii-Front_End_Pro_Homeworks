//*Part 1*//
let operator = prompt(`Enter operator +, -, /, *`);
let num1 = validation(`Enter operand A`);
let num2 = validation(`Enter operand B`);
let result = count(operator, num1, num2);
const arr = ['+', '-', '/', '*'];

alert(`${num1} ${operator} ${num2} = ${result}`);


function validation(numbers) {
    if (Number.isNaN(numbers) === false)
        return Number(prompt(`Enter operator ${numbers}`));
    else if (arr.includes(`+, -, /, *`))
        return Number(prompt(`Enter operator ${numbers}`))
}

function count(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
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


