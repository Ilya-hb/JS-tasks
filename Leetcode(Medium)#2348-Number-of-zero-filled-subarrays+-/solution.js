/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let curr = 0;
  let streak = 0;

  for (let num of nums) {
    if (num === 0) {
      streak++;
      curr += streak;
    } else streak = 0;
  }

  return curr;
};

console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));
