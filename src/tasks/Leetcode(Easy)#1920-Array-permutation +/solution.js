/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    return nums.map((el, index) => nums[nums[index]]);
  };
  
  console.log(buildArray([5, 0, 1, 2, 3, 4]));
  