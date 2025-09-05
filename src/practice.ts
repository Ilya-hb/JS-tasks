interface Result {
  [key: number]: number;
}
function countOccurencies(arr: number[]): Result {
  if (!Array.isArray(arr)) throw new Error("Array is not an array");
  const result: Result = {};
  arr.forEach((el) => (result[el] = el in result ? result[el] + 1 : 1));
  return result;
}

console.log(countOccurencies([1, 2, 3, 4, 5, 5, 5, 2, 1]));
