/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// the overall time complexity should be O(log (m+n)) but my has O((m+n) log (m+n)) because of sort method
var findMedianSortedArrays = function (nums1, nums2) {
  // My approach
  const resultArr = nums1.concat(nums2).sort((a, b) => a - b); // bad optimization
  const length = resultArr.length;
  console.log(resultArr);
  if (length % 2 !== 0) {
    return resultArr.at(length / 2);
  } else {
    let leftMedIndex = resultArr.at(Math.round((length - 1) / 2));
    let rightMedIndex = resultArr.at(Math.round((length - 1.1) / 2));
    return (leftMedIndex + rightMedIndex) / 2;
  }

  // Better variant
  //   const a = nums1.concat(nums2).sort((x, y) => x - y);
  // const n = a.length;
  // if (n % 2) return a[Math.floor(n / 2)];
  // const mid = n / 2;
  // return (a[mid - 1] + a[mid]) / 2;
};

// console.log(findMedianSortedArrays([1, 2], [3, 4])); //length 4
// console.log(findMedianSortedArrays([1, 3], [2])); //length 3
console.log(
  findMedianSortedArrays(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  )
);
