/**
 * @param {number} n
 * @return {boolean}
 */

// bad performance (my solution)
var isPowerOfThree = function (n, i = 1) {
  if (n <= 0) return false;
  return Math.pow(i, 3) === n ? true : isPowerOfThree(n, (i += 1));
};
console.log(isPowerOfThree(27));

//better variant
var isPowerOfThreeGood = function (n) {
  if (n < 1) return false;

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
};
console.log(isPowerOfThreeGood(27));
console.log(isPowerOfThreeGood(28));
