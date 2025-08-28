/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const stash = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in stash) {
      return stash[key];
    }
    stash[key] = fn(...args);
    console.log(stash);
    return stash[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
