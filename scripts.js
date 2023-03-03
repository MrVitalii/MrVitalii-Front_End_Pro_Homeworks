'use strict'

function Hamburger(size) {
    // implement
    this.price = size.price //price = chose size
    this.calories = size.calories //calories = chose size
    this.toppings = [] //empty massive for toppings
}

//Static properties
Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
}

Hamburger.SIZE_MIDDLE = {
    price: 75,
    calories: 30,
}

Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
}

Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.TOPPING_SEASONINGS = {
    price: 15,
    calories: 0,
}

Hamburger.TOPPING_MAYONNAISE = {
    price: 20,
    calories: 5,
}

//Methods in prototype
Hamburger.prototype.addTopping = function (topping) {
    this.toppings.push(topping) //pushing toppings to massive
    this.price += topping.price
    this.calories += topping.calories
}

Hamburger.prototype.getPrice = function () {
    return this.price
}

Hamburger.prototype.getCalories = function () {
    return this.calories
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL)

hamburger.addTopping(Hamburger.TOPPING_CHEESE)
hamburger.addTopping(Hamburger.TOPPING_SALAD)
hamburger.addTopping(Hamburger.TOPPING_POTATO)
hamburger.addTopping(Hamburger.TOPPING_SEASONINGS)
hamburger.addTopping(Hamburger.TOPPING_MAYONNAISE)

console.log('Price with sauce: ' + hamburger.getPrice() + ' tugriks')
console.log('Calories with sauce: ' + hamburger.getCalories() + ' calories')