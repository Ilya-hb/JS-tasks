function sumDigPow(a, b) {
  const result = [];
  for (a; a < b; a++) {
    let splittedNum = a.toString().split("");
    let sum = 0;
    for (let i = 0; i < splittedNum.length; i++) {
      sum += Math.pow(splittedNum[i], i + 1);
    }
    if (sum === a) result.push(sum);
  }
  return result;
}

console.log(sumDigPow(10, 100));
