function charFrequency(str) {
  const uniqueChars = [...new Set(str)].reduce((obj, val) => {
    obj[val] = 0;
    return obj;
  }, {});

  for (char of str) {
    if (char in uniqueChars) {
      uniqueChars[char] += 1;
    }
  }
  console.log(uniqueChars);
}
// Верни объект, в котором ключи — символы, значения — сколько раз встречаются в строке.
charFrequency("hello");
// { h: 1, e: 1, l: 2, o: 1 }
