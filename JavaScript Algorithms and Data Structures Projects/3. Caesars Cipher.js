function rot13(str) {
  str.toUpperCase();
  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  let nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let arrString = str.split("");

  for (let i = 0; i < arrString.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if (arrString[i] === abc[j]) {
        arrString[i] = nop[j];
      } else if (arrString[i] === nop[j]) {
        arrString[i] = abc[j];
      }
    }
  }

  return arrString.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
