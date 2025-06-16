/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  // Bad optimization
  // let result = 0;
  // let flag = false;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     console.log(nums[i], nums[j]);
  //     let diff = nums[j] - nums[i];
  //     if (diff > result) {
  //       result = diff;
  //       flag = true;
  //     }
  //   }
  // }
  // if (!flag) return -1;
  // return result;

  //Improved Solution with 1 loop
  let min = nums[0];
  let maxDiff = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min) maxDiff = Math.max(maxDiff, nums[i] - min);
    else min = nums[i];
  }
  return maxDiff;
};

maximumDifference([7, 1, 5, 4]);
// maximumDifference([1, 5, 2, 10]);
