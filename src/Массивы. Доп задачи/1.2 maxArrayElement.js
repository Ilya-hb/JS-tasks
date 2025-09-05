const arr = [-10, -20, 5, 30, 15];

function findMax(arr) {
  if (arr.length === 0) return null;
  let max = -Infinity;
  arr.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}

function findMax(arr) {
  const result = arr.reduce((accumulator, currentVal) => {
    return accumulator > currentVal ? accumulator : currentVal;
  }, -Infinity);
  return result;
}

console.log(findMax(arr)); // 30
const negativeArr = [-10, -20, -5, 10];
console.log(findMax(negativeArr)); // -5
