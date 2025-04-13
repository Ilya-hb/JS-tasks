/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let kidsWithExtra = [...candies].map((el) => el + extraCandies);
  let greatest = [...candies].sort((a, b) => b - a)[0];
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (kidsWithExtra[i] >= greatest) result.push(true);
    else result.push(false);
  }
return result
  console.log(kidsWithExtra);
  console.log(candies);
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
