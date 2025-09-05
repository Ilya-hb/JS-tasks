
# 2138. Divide a String Into Groups of Size k

## Problem

A string `s` can be partitioned into groups of size `k` using the following procedure:

- The first group consists of the first `k` characters of the string, the second group consists of the next `k` characters of the string, and so on.
- Each element can be a part of exactly one group.
- For the last group, if the string does not have `k` characters remaining, a character `fill` is used to complete the group.

**Note:** The partition is done so that after removing the `fill` character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be `s`.

### Given
- A string `s`
- An integer `k` (size of each group)
- A character `fill` (used to pad the last group if necessary)

### Return
A string array denoting the composition of every group `s` has been divided into using the above procedure.

---

## Examples

### Example 1:
**Input:**
```js
s = "abcdefghi", k = 3, fill = "x"
```
**Output:**
```js
["abc", "def", "ghi"]
```
**Explanation:**
The string can be evenly split into three groups of size 3 without padding.

### Example 2:
**Input:**
```js
s = "abcdefghij", k = 3, fill = "x"
```
**Output:**
```js
["abc", "def", "ghi", "jxx"]
```
**Explanation:**
The string requires padding in the final group. The last group gets two `x` characters.

---

## Constraints
- `1 <= s.length <= 100`
- `s` consists of lowercase English letters
- `1 <= k <= 100`
- `fill` is a lowercase English letter

---

## Tags
String, Simulation
