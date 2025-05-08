/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  let i = 1;
  for (; i < nums.length; ) {
    if (nums[i] !== nums[j - 1]) {
      nums[j] = nums[i];
      j++;
    }
    i++;
  }
  return j;
};

// console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 2, 2, 3]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
