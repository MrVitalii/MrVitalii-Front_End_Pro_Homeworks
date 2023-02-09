//*Part 1*//
let operator = prompt(`Enter operator +, -, /, *`);
let num1 = Number(prompt(`Enter operand A`));
let num2 = Number(prompt(`Enter operand B`));


if (isNaN(num1) || isNaN(num2) || (operator !== '+' & operator !== '-' & operator !== '/' & operator !== '*')
) {
    alert('You must choose a number and operand!');
} else {
    const result = calc(operator, num1, num2);
    ViewResults(num1, operator, num2, result)
}

function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
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


