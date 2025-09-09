"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function climbStairs(n) {
    const cache = { 1: 1, 2: 2 };
    function memo(n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            cache[n] = memo(n - 2) + memo(n - 1);
            return cache[n];
        }
    }
    return memo(n);
}
console.log(climbStairs(3));
console.log(climbStairs(5));
//# sourceMappingURL=solution.js.map