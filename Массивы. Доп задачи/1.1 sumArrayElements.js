const arr = [10, 20, 5, 30, 15];

// function findMax(arr) {
//   let max = 0;
//   arr.forEach((element) => {
//     if (element > max) max = element;
//   });
//   return max;
// }

function findMax(arr) {
  const result = arr.reduce((accumulator, currentVal) => {
    return accumulator > currentVal ? accumulator : currentVal;
  }, 0);
  return result;
}

console.log(findMax(arr)); // 30
