/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const map = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in map)) stack.push(s[i]); // push the opening bracket
    else {
      if (!stack.length || stack[stack.length - 1] !== map[s[i]]) return false;
      else stack.pop();
    }
  }
  return !stack.length;
};
