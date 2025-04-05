var reverseBits = function (n) {
  const binaryString = n.toString(2).padStart(32, 0);
  const reverseBinary = binaryString.split("").reverse().join("");
  return parseInt(reverseBinary, 2);
};
