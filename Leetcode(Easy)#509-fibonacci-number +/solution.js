/**
 * @param {number} n
 * @return {number}
 */
// time complexity O(2^n), my solution
// var fib = function (n) {
//   if (n > 1) {
//     return fib(n - 1) + fib(n - 2);
//   }
//   return n;
// };

// console.log(fib(3));

//better approach using memoization O(n)
var fib = function (n, memo = {}) {
  if (n <= 1) return n;
  if (n in memo) return memo[n]; //if already exists
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); //caching result
  console.log(memo);
  return memo[n];
};

console.log(fib(4));
