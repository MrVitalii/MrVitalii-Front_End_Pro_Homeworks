// Проверить что слово love встречается в строке:

regexp = /love/

alert(regexp.test('I love JavaScript')) // true

alert(regexp.test('I JavaScript')) // false

// Проверить что строка заканчивается на ing:

regexp = /ing$/

alert(regexp.test('Good morning')) // true

alert(regexp.test('Good morning!')) // false