function order(words) {
  let splitted = words.split(" ");
  let obj = {};

  for (let i = 0; i < splitted.length; i++) {
    let chars = splitted[i].split("");
    for (let j = 0; j < chars.length; j++) {
      if (!isNaN(parseInt(chars[j]))) obj[splitted[i]] = parseInt(chars[j]);
    }
  }
  return Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .map(([word]) => word)
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
