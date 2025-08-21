/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return nums.reduce((acc, el, currIndex) => {
    if (target > el) {
      return currIndex + 1;
    } else if (target === el) {
      return currIndex;
    } else {
      return acc;
    }
  }, 0);
};

console.log(searchInsert([1, 3, 5, 6], 5));
