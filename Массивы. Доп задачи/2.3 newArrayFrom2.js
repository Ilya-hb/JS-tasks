const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// function mergeArrays(arr1, arr2) {
//   const result = [...arr1, ...arr2];
//   return result;
// }

// function mergeArrays(arr1, arr2) {
//   const result = [...arr1];
//   for (let i = 0; i < arr2.length; i++) {
//     result.push(arr2[i]);
//   }
//   return result;
// }

// function mergeArrays(arr1, arr2) {
//   const result = arr1.concat(arr2);
//   return result;
// }

console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
