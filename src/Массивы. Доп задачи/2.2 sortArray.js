const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 10];

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// function sortArray(arr) {
//   const result = [arr[0]];

//   return result;
// }

console.log(sortArray(arr)); // [1, 1, 2, 3, 4, 5, 5, 6, 9]
