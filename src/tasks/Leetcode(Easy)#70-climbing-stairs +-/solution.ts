interface Storage {
  [key: number]: number;
}

function climbStairs(n: number): number {
  const cache: Storage = { 1: 1, 2: 2 };
  function memo(n: number): number {
    if (n in cache) {
      return cache[n]!;
    } else {
      cache[n] = memo(n - 2) + memo(n - 1);
      return cache[n];
    }
  }
  return memo(n);
}

console.log(climbStairs(3));
console.log(climbStairs(5));
