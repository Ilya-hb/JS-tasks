# 326. Power of Three

**Easy**  
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that:

```
n == 3^x
```

## Example 1

**Input:**

```
n = 27
```

**Output:**

```
true
```

**Explanation:** 27 = 3^3

## Example 2

**Input:**

```
n = 0
```

**Output:**

```
false
```

**Explanation:** There is no x where 3^x = 0.

## Example 3

**Input:**

```
n = -1
```

**Output:**

```
false
```

**Explanation:** There is no x where 3^x = (-1).

---

## Constraints

- -2^31 <= n <= 2^31 - 1

---

## **Solution 1: Inefficient (Brute Force with recursion)**

```javascript
var isPowerOfThree = function (n, i = 1) {
  if (n <= 0) return false;
  return Math.pow(i, 3) === n ? true : isPowerOfThree(n, (i += 1));
};
```

---

## **Solution 2: Efficient (Division by 3 method)**

```javascript
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};
```

---

**Time Complexity:**

- Brute Force: **O(n)** in worst case
- Division Method: **O(log₃ n)**

**Space Complexity:**

- Brute Force: **O(n)** (due to recursion)
- Division Method: **O(1)**
