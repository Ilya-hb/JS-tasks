"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countOccurencies(arr) {
  if (!Array.isArray(arr)) throw new Error("Array is not an array");
  const result = {};
  arr.forEach((el) => (result[el] = el in result ? result[el] + 1 : 1));
  return result;
}
console.log(countOccurencies([1, 2, 3, 4, 5, 5, 5, 2, 1]));
//# sourceMappingURL=practice.js.map
