function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  return new Set(lowerStr).size === lowerStr.length;
}
console.log(isIsogram(`man i need a taxi up to ubud`));
