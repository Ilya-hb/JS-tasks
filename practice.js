/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a,b)=>a-b);
    if(nums[0]===nums[1] && nums[1] === nums[2])return 'equilateral'
    if(nums[])
};

console.log(triangleType([3,4,5]))
console.log(triangleType([3,3,3]))
console.log(triangleType([]))