/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueNums = Array.from(new Set(nums));
  const resultObj = {};
  for (num of uniqueNums) {
    resultObj[num] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in resultObj) {
      resultObj[nums[i]]++;
    }
  }
  console.log(resultObj);
  return Object.values(resultObj).some((el) => el >= 2);
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
