/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n, i = 1) {
  if (n <= 0) return false;
  return Math.pow(i, 3) === n ? true : isPowerOfThree(n, (i += 1));
};
console.log(isPowerOfThree(27));
