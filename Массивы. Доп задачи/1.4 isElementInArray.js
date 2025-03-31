const arr = [1, 2, 3, 4, 5];

// function contains(arr, searchNum) {
//   return arr.includes(searchNum);
// }

function contains(arr, searchNum) {
  for (const el of arr) {
    if (el === searchNum) return true;
  }
  return false;
}

console.log(contains(arr, 3)); // true
console.log(contains(arr, 6)); // false
