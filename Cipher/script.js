const inputText = document.getElementById("input-text");
const cipherBTN = document.getElementById("cipher-button");
const cipherResult = document.getElementById("cipher-result");

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const offset = 1;
let corrAlphabet = [];

for (let i = 0; i < alphabet.length; i++) {
  if (i + offset < alphabet.length) corrAlphabet[i + offset] = alphabet[i];
  else {
    corrAlphabet[i + offset - alphabet.length] = alphabet[i];
  }
}
console.log(corrAlphabet);

function cipher() {
  const text = prompt("Enter your text").toUpperCase();
  if (!text) {
    const confirmInvalid = confirm("Enter a valid text");
    if (confirmInvalid) return cipher();
    return false;
  }
  const textArray = text.split("");

  let result = "";
  for (let i = 0; i < textArray.length; i++) {
    const alphabetIndex = alphabet.indexOf(textArray[i]);
    result += corrAlphabet[alphabetIndex];
  }
  alert("your cipher is :  " + result);
}

const decipherText = document.getElementById("decipher-text");
const decipherBTN = document.getElementById("decipher-button");
const decipherRES = document.getElementById("decipher-result");

function decipher() {
  const text = prompt("Enter your cipher text");
  if (!text) {
    const confirmInvalid = confirm("Enter a valid text");
    if (confirmInvalid) return decipher();
    return false;
  }
  const textArray = text.split("");

  let result = "";
  for (let i = 0; i < textArray.length; i++) {
    const corrAlphabetIndex = corrAlphabet.indexOf(textArray[i]);
    result += alphabet[corrAlphabetIndex];
  }
  alert("your decipher is :   " + result);
}
