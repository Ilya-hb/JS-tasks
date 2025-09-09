function thirdMax(nums: number[]): number {
  const result: number[] = [];
  nums.sort((a, b) => b - a);
  const uniqueNums = new Set(nums);
  console.log(uniqueNums);
  if (uniqueNums.size >= 3) {
    return Array.from(uniqueNums).at(2)!;
  } else {
    return Math.max(...uniqueNums);
  }
}

// console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2, 2, 5, 3, 5]));
