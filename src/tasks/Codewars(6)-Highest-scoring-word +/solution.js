function high(x) {
  const words = x.split(" ");
  const codes = [];
  for (let i = 0; i < words.length; i++) {
    let wordCode = 0;
    let splittedWord = words[i].split("");

    splittedWord.forEach((symbol) => {
      wordCode += symbol.charCodeAt() - 96;
    });
    codes.push(wordCode);
  }
  return words[codes.indexOf(Math.max(...codes))];
}

console.log(high("man i need a taxi up to ubud"));
