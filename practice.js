/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let strDigits = digits.toString().split(",").join("");
  const result = (parseInt(strDigits) + 1).toString().split("");

  return result.map((el) => +el);
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9]));
