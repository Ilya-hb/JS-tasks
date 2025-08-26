/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let maxDiagonal = -1;
  let maxArea = -1;

  for (let [l, w] of dimensions) {
    const diagonal = Math.sqrt(l * l + w * w);
    const area = l * w;

    if (
      diagonal > maxDiagonal ||
      (diagonal === maxDiagonal && area > maxArea)
    ) {
      maxDiagonal = diagonal;
      maxArea = area;
    }
  }
  return maxArea;
};
