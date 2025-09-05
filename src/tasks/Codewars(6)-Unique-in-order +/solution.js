var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const arr = Array.isArray(iterable) ? iterable : iterable.split("");
  return arr.filter((el, index) => el !== arr[index + 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3]));
