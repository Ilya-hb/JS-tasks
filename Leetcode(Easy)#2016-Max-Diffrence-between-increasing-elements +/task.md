# 2016. Maximum Difference Between Increasing Elements

**Problem**  
Given a 0-indexed integer array `nums` of size `n`, find the maximum difference between `nums[i]` and `nums[j]` (i.e., `nums[j] - nums[i]`), such that `0 <= i < j < n` and `nums[i] < nums[j]`.

Return the maximum difference. If no such `i` and `j` exists, return `-1`.

---

**Example 1**  
Input: `nums = [7,1,5,4]`  
Output: `4`

**Example 2**  
Input: `nums = [9,4,3,2]`  
Output: `-1`

**Example 3**  
Input: `nums = [1,5,2,10]`  
Output: `9`

---

**Constraints**

- `n == nums.length`
- `2 <= n <= 1000`
- `1 <= nums[i] <= 10^9`

---
