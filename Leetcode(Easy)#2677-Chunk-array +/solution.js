/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (!arr.length) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([1, 9, 6, 3, 2], 3));
