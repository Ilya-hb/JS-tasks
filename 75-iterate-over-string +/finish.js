/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// Напишите код здесь
// OTION 1
// for (let char of str) {
//   if (vowels.includes(char)) vowelsCount++;
// }

// OPTION 2
// vowelsCount = str.split("").filter((el) => vowels.includes(el)).length;

//OPTION 3
vowelsCount = (str.match(/[aeiou]/gi) || []).length;

console.log(vowelsCount);
// 9
