/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) return !obj.length ? true : false;

  return !Object.entries(obj).length ? true : false;
};

isEmpty({ x: 5, y: 42 });
console.log(isEmpty({}));
isEmpty([null, false, 0]);
