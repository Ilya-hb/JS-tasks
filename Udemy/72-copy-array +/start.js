/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3];

// Напишите код здесь
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   b[i] = a[i];
// }

// const b = Array.from(a);
// const b = [...a];
// const b = JSON.parse(JSON.stringify(a));

console.log(b);
b.push("newElement");
console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
