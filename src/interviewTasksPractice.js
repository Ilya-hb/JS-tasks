// ## 🔹 Простые задачи (разминка)

// 1. **Палиндром**

// Напиши функцию isPalindrome(str), которая возвращает true, если строка читается одинаково слева и справа.
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

isPalindrome("racecar"); // true
isPalindrome("hello"); // false

// 1. **Факториал**

// Напиши функцию factorial(n), которая возвращает n!

function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}
console.log(factorial(5)); // 120
factorial(5); // 120

// 1. **Поиск самого длинного слова**

// Напиши функцию longestWord(str), которая возвращает самое длинное слово в строке.
function longestWord(str) {
  return str
    .split(" ")
    .reduce((acc, el) => (acc.length > el.length ? acc : el), 0);
}
longestWord("I am frontend developer"); // 'developer'

// 1. **Сумма чисел в массиве**

// Напиши функцию sum(arr), которая возвращает сумму всех чисел в массиве.
function sum(arr) {
  return arr.reduce((acc, el) => acc + el, 0);

  // let result = 0;
  // arr.forEach((el)=>result+=el)
  // return result;
}
sum([1, 2, 3, 4]); // 10

// 1. **Физбаз (FizzBuzz)**

// Выведи от 1 до 100:
// Если число делится на 3 — Fizz, на 5 — Buzz, на 3 и 5 — FizzBuzz, иначе само число.
function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`${i} - Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} - Buzz`);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} - FizzBuzz`);
    } else console.log(i);
  }
}

FizzBuzz();

// ## 🔸 Средняя сложность

// 1. **Анаграмма**

// Напиши функцию isAnagram(str1, str2), которая проверяет, являются ли строки анаграммами.
function isAnagram(str1, str2) {
  str1result = str1.split("").sort().join("");
  str2result = str2.split("").sort().join("");
  console.log(str2result, str1result);
  return str1result === str2result;
}
isAnagram("listen", "silent"); // true
isAnagram("hello", "world"); // false

// 1. **Удаление дубликатов**

// Удали дубликаты из массива (верни новый массив).
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
removeDuplicates([1, 2, 2, 3, 4, 4]); // [1,2,3,4]

// 1. **Реверс строки (без встроенного .reverse())**

// Верни строку наоборот.
function reverseString(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str.charAt(i));
  }
  return result;
}

reverseString("hello"); // 'olleh'

// ## 🔺 С логикой / на собесах часто

// 1. **Сравнение массивов**

// Напиши функцию, которая сравнивает два массива на равенство (значения и порядок).
function arraysEqual(arr1, arr2) {
  // console.log(arr1.toString() === arr2.toString());
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
arraysEqual([1, 2, 3], [1, 2, 3]); // true
arraysEqual([1, 2], [2, 1]); // false

// 1. **Частота символов**

// Верни объект, в котором ключи — символы, значения — сколько раз встречаются в строке.

function charFrequency(str) {
  const uniqueChars = [...new Set(str)].reduce((obj, val) => {
    obj[val] = 0;
    return obj;
  }, {});

  for (char of str) {
    if (char in uniqueChars) {
      uniqueChars[char] += 1;
    }
  }
}
charFrequency("hello");
// { h: 1, e: 1, l: 2, o: 1 }
