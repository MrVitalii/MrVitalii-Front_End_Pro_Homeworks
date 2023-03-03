'use strict'

function Hamburger() {
    // implement
}


Hamburger.SIZE_SMALL = {
    price: 100,
    callories: 8888,
}


Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 42,
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());
