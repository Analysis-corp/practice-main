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
  if (i + offset < alphabet.length) {
    corrAlphabet[i + offset] = alphabet[i];
  } else {
    corrAlphabet[i + offset - alphabet.length] = alphabet[i];
  }
}

console.log(corrAlphabet);

function cipher() {
  const text = inputText.value.toUpperCase();
  console.log(text);

  let result = "";
  const textArray = text.split("");
  console.log(textArray);

  for (let i = 0; i < textArray.length; i++) {
    const alphabetIndex = alphabet.indexOf(textArray[i]);
    result += corrAlphabet[alphabetIndex];
  }
  console.log(result);
}
