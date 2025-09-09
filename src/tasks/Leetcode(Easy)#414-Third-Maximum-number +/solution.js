"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function thirdMax(nums) {
  const result = [];
  nums.sort((a, b) => b - a);
  const uniqueNums = new Set(nums);
  console.log(uniqueNums);
  if (uniqueNums.size >= 3) {
    return Array.from(uniqueNums).at(2);
  } else {
    return Math.max(...uniqueNums);
  }
}
// console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2, 2, 5, 3, 5]));
//# sourceMappingURL=practice.js.map
