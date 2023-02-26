'use strict'

function Calculator(base) {
    this.currentValue = base

    this.add = function add(base) {
        if (typeof base === 'number') {
            return this.currentValue += base
        }
    }

    this.sub = function sub(base) {
        if (typeof base === 'number') {
            return this.currentValue -= base
        }
    }

    this.set = function set(base) {
        if (typeof base === 'number') {
            return this.currentValue = base
        }
    }

    this.get = function get() {
        return this.currentValue
    }

    this.reset = function get() {
        this.currentValue = base
    }

}


const calc = new Calculator(100);


calc.add(10)
calc.add(10)
calc.sub(20)


calc.set(20)
calc.add(10)
calc.add(10)
calc.add('qwe')


console.log(calc.get()) // 40
// ((base = 100) + 10 + 10 - 20 = 100 => (set new value = 20) + 10 + 10 + (string 'qwe' ignore) = 40)


calc.reset()
console.log(calc.get()) // 100
// (return base = 100)



