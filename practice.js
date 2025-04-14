function reverseWords(str) {
  const result = str.split(" ").map((el) => el.split("").reverse().join("")).join(" ");

  console.log(result);
}

reverseWords("The quick brown fox jumps over the lazy dog.");
