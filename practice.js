// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // Твоя функция:
// function mergeArrays(a, b) {
//   return [...a, ...b]
// }

// console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]

// const user = { name: "Anna", age: 25 };

// function copyObject(obj) {
//   return { ...obj };
// }

// console.log(copyObject(user)); // { name: 'Anna', age: 25 }

// function getMax(...numbers) {
//   return Math.max(...numbers)
// }

// console.log(getMax(1, 99, 34, 7)); // 99

// const numbers = [10, 20, 30, 40];

// function splitFirst(arr) {
//   const sda = [];
//   return { first: arr[0], rest: arr.slice(1, arr.length) };
// }

// console.log(splitFirst(numbers)); // { first: 10, rest: [20, 30, 40] }

// const objA = { a: 1, b: 2 };
// const objB = { b: 99, c: 3 };

// function mergeObjects(o1, o2) {
// return {...o1, ...o2}
// }

// console.log(mergeObjects(objA, objB));
// // { a: 1, b: 99, c: 3 }

// function filterOutFirst(...args) {
//  return args.slice(1, args.length)
// }

// console.log(filterOutFirst(1, 2, 3, 4)); // [2, 3, 4]

// function combineStrings(...words) {
//   return words.join(" ");
// }

// console.log(combineStrings("Hello", "world", "!")); // "Hello world !"

// const settings = { theme: "dark", lang: "en", layout: "grid" };

// // Получи переменную theme, остальные в другой объект
// const { theme, ...restSettings } = settings;

// console.log(theme); // "dark"
// console.log(restSettings); // { lang: "en", layout: "grid" }

// function logFirstArg(...args) {
//   console.log(args[0]);
// }

// // logFirstArg("🍕", "🍔", "🍟"); // => "🍕"

// function showArgs(a, ...rest) {
//   console.log(a, rest);
// }

// showArgs(1, 2, 3, 4);
// // Что будет в консоли? 
// // ответ - только массив а
