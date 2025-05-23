/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  console.log(strs[0][0]);
  for (let i = 1; i < strs.length; i++) {
    let current = strs[i];
    while (!current.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix == "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flo2323wer", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
