function createCalculator(base) {
    // implement
    let currentValue = base

    return {
        add: (base) => {
            if (typeof base === 'number')
                currentValue += base
        },
        sub: (base) => {
            if (typeof base === 'number')
                currentValue -= base
        },
        set: (base) => {
            if (typeof base === 'number')
                currentValue = base
        },
        get: () => {
            return currentValue
        },
        reset: () => {
            currentValue = base
        }
    }
}


const calculator = createCalculator(100);


calculator.add(10) // 110 - это текущее значение base
calculator.add(10)
calculator.sub(20)


calculator.set(20)
calculator.add(10)
calculator.add(10)
calculator.add('qwe') // NaN и значение 40 не менять


console.log(calculator.get()) // 40
// ((base = 100) + 10 + 10 - 20 = 100 => (set new value = 20) + 10 + 10 + (string 'qwe' ignore) = 40)


calculator.reset()
console.log(calculator.get()) // 100
// (return base = 100)

