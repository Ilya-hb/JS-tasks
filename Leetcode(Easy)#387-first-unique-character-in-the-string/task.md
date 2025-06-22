# 387. First Unique Character in a String

## Problem

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return -1.

### Examples

#### Example 1:

**Input:** s = "leetcode"  
**Output:** 0  
**Explanation:** The character 'l' at index 0 is the first character that does not occur at any other index.

#### Example 2:

**Input:** s = "loveleetcode"  
**Output:** 2

#### Example 3:

**Input:** s = "aabb"  
**Output:** -1

### Constraints:

- 1 <= s.length <= 10⁵

## Task

Implement the function:

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // Your code here
};
```

You should iterate through the string and find the first character whose count is 1. Return its index or -1 if no such character exists.
