/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let strDigits = digits.toString().split(",").join("");
  const result = (BigInt(strDigits) + 1n).toString().split("");

  return result.map((el) => +el);
};
