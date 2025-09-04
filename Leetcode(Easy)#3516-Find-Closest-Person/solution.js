/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  p1Distance = Math.abs(z - x);
  p2Distance = Math.abs(z - y);
  if (p1Distance < p2Distance) return 1;
  else if (p1Distance === p2Distance) return 0;

  return 2;
};
