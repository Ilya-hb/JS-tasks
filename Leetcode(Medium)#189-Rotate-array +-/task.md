# 189. Rotate Array

## Problem

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

---

### Example 1

**Input:**

```js
nums = [1, 2, 3, 4, 5, 6, 7], k = 3
```

**Output:**

```js
[5, 6, 7, 1, 2, 3, 4]
```

**Explanation:**

- rotate 1 step to the right: `[7, 1, 2, 3, 4, 5, 6]`
- rotate 2 steps to the right: `[6, 7, 1, 2, 3, 4, 5]`
- rotate 3 steps to the right: `[5, 6, 7, 1, 2, 3, 4]`

### Example 2

**Input:**

```js
nums = [-1, -100, 3, 99], k = 2
```

**Output:**

```js
[3, 99, -1, -100]
```

**Explanation:**

- rotate 1 step to the right: `[99, -1, -100, 3]`
- rotate 2 steps to the right: `[3, 99, -1, -100]`

---

## Constraints

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `0 <= k <= 10^5`

---

## Follow up

- Try to come up with as many solutions as possible. There are at least three different ways to solve this problem.
- Could you do it **in-place** with **O(1)** extra space?

---

## Approach (Reverse Method)

1. Reverse the entire array.
2. Reverse the first `k` elements.
3. Reverse the remaining `n-k` elements.

We take `k = k % nums.length` to avoid unnecessary rotations.

### Code

```javascript
const revNums = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;
  nums.reverse();

  revNums(nums, 0, k - 1);
  revNums(nums, k, nums.length - 1);
  return nums;
};
```

---

## Complexity

- **Time:** `O(n)` — each element is reversed a constant number of times.
- **Space:** `O(1)` — in-place modification without extra storage.

