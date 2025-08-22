/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let result = "";
  let arr = [];
  for (let char of s) {
    if (!result.includes(char)) {
      result += char;
    } else {
      arr.push(result);
      result = result.slice(result.indexOf(char) + 1) + char;
    }
  }
  arr.push(result);
  console.log(arr);
  return Math.max(...arr.map((el) => el.length));
};
