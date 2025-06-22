/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const result = [];
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    temp += s[i];
    if ((i + 1) % k === 0) {
      result.push(temp);
      temp = "";
    }
  }
  if (temp) {
    const needed = k - temp.length;
    for (let i = 0; i < needed; i++) {
      temp += fill;
    }
    console.log(temp);
    result.push(temp);
  }
  console.log(result);
  return result;
};

divideString("abcdefghij", 3, "x");
divideString("ctoyjrwtngqwt", 8, "n");
