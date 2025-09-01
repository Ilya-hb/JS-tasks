## Task: Implement Debounce

### Problem

Given a function `fn` and a time in milliseconds `t`, return a debounced version of that function.

![alt text](https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png)

A **debounced function** is a function whose execution is delayed by `t` milliseconds and whose execution is **cancelled** if it is called again within that time window. The debounced function should also receive the passed parameters.

You **must not** use lodash's `_.debounce()` function.

---

### Example 1

**Input:**

```js
t = 50;
calls = [
  { t: 50, inputs: [1] },
  { t: 75, inputs: [2] },
];
```

**Output:**

```js
[{ t: 125, inputs: [2] }];
```

**Explanation:**

- The 1st call (at 50ms) is cancelled by the 2nd call (at 75ms), because it happened before 100ms.
- The 2nd call executes at 125ms with inputs `(2)`.

---

### Example 2

**Input:**

```js
t = 20;
calls = [
  { t: 50, inputs: [1] },
  { t: 100, inputs: [2] },
];
```

**Output:**

```js
[
  { t: 70, inputs: [1] },
  { t: 120, inputs: [2] },
];
```

**Explanation:**

- The 1st call is delayed until 70ms with `(1)`.
- The 2nd call is delayed until 120ms with `(2)`.

---

### Example 3

**Input:**

```js
t = 150;
calls = [
  { t: 50, inputs: [1, 2] },
  { t: 300, inputs: [3, 4] },
  { t: 300, inputs: [5, 6] },
];
```

**Output:**

```js
[
  { t: 200, inputs: [1, 2] },
  { t: 450, inputs: [5, 6] },
];
```

**Explanation:**

- The 1st call (at 50ms) executes at 200ms.
- The 2nd call (at 300ms) is cancelled by the 3rd call (also at 300ms).
- The 3rd call executes at 450ms with `(5, 6)`.

---

### Constraints

- `0 <= t <= 1000`
- `1 <= calls.length <= 10`
- `0 <= calls[i].t <= 1000`
- `0 <= calls[i].inputs.length <= 10`

---

### Function Signature

```js
function debounce(fn, t) {
  // your code here
}
```

### Expected Behavior

- Returns a new function that wraps `fn`.
- If the function is called again within `t` ms, the previous timer is cleared and reset.
- Executes only after the last call within the debounce window.
