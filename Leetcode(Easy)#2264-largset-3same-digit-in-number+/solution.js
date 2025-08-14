/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let maxGood = "";

  for (let i = 0; i < num.length - 2; i++) {
    let substr = num.slice(i, i + 3);
    if (substr[0] === substr[1] && substr[1] === substr[2]) {
      if (substr > maxGood) maxGood = substr;
    }
  }
  return maxGood;
};

console.log(largestGoodInteger("123"));
console.log(largestGoodInteger("1221000"));
