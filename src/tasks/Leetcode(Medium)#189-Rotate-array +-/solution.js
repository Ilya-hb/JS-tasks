// 1. Reverse Array
// 2. Find K-index
// 3. Find k-1
// 4. Reverse 2 subarrays where k-1 end of 1st subarray, and k start of next subarray

// we mod k, because let's say k=5
// and array length is 4,
// then ideally you just need to do 1 rotation instead of 5 rotations.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const revNums = (start, end, nums) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.reverse();

  revNums(0, k - 1, nums);
  revNums(k, nums.length - 1, nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
