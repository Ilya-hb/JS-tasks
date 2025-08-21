const numbers = [1, 2, 3, 4, 5];
const x2Numbers = numbers.map((el) => el * 2);
console.log(x2Numbers);
// Ожидаемый результат: [2, 4, 6, 8, 10]

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const editWords = words
  .filter((el) => el.length > 5)
  .map((el) => el.toUpperCase());
console.log(editWords);
// Ожидаемый результат: ['BANANA', 'ORANGE']

const nums = [10, 20, 30, 40, 50];
const result = nums.reduce((acc, el) => acc + el, 0);
console.log(result);
// Ожидаемый результат: 150

const values = [5, 8, 2, 10, 3];
console.log(values.reduce((acc, el) => (acc > el ? acc : el)));
// можно еще так:
console.log(Math.max(...values));
// Ожидаемый результат: 10

const arr = [5, 12, 8, 15, 3];
// Ожидаемый результат: 12
console.log(arr.find((num) => num > 10));

const data = [1, 5, -2, 8, 3];
console.log(data.some((el) => el < 0));
console.log(data.every((el) => el > 0));

const unsorted = [100, 5, 20, 3, 50];
console.log(unsorted.sort((a, b) => a - b));
// Ожидаемый результат: [3, 5, 20, 50, 100]

const nested = [1, [2, 3], [4, [5, 6]]];
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]
console.log(nested.flat()); // flat - никогда не пользовался

const cart = [
  { name: "Apple", price: 10, quantity: 2 },
  { name: "Banana", price: 15, quantity: 1 },
  { name: "Orange", price: 20, quantity: 3 },
];
// Ожидаемый результат: 10*2 + 15*1 + 20*3 = 20 + 15 + 60 = 95
let cartPrice = 0;
cart.forEach((el) => (cartPrice += el.price * el.quantity));
console.log(cartPrice);

const duplicates = [5, 2, 8, 2, 5, 10, 8, 1];
console.log(Array.from(new Set(duplicates)).sort((a, b) => b - a));
// Ожидаемый результат: [10, 8, 5, 2, 1]
