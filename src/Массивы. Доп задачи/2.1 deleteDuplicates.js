const arr = [1, 2, 2, 3, 4, 4, 5];

// function removeDuplicates(arr) {
//   const result = new Set(arr);
//   return Array.from(result);
// }

// function removeDuplicates(arr) {
//   return arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }
//     return acc;
//   }, []);
// }

function removeDuplicates(arr) {
  return arr.filter((el, index) => arr.indexOf(el) === index);
}

console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]
