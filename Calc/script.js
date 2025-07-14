const modBTN = document.getElementById("%");
const divBTN = document.getElementById("/");
const subBTN = document.getElementById("-");
const addBTN = document.getElementById("+");
const mulBTN = document.getElementById("*");
const eqlBTN = document.getElementById("=");
const oneBTN = document.getElementById("1");
const twoBTN = document.getElementById("2");
const threeBTN = document.getElementById("3");
const fourBTN = document.getElementById("4");
const fiveBTN = document.getElementById("5");
const sixBTN = document.getElementById("6");
const sevenBTN = document.getElementById("7");
const eightBTN = document.getElementById("8");
const nineBTN = document.getElementById("9");
const zeroBTN = document.getElementById("0");
const dZeroBTN = document.getElementById("00");
const dotBTN = document.getElementById(".");
const clearBTN = document.getElementById("clear");

const results = document.getElementById("results");
let operations = "";

function addOPT(symbol) {
  operations += symbol;
  results.innerText = operations;
}

modBTN.addEventListener("click", () => addOPT("%"));
divBTN.addEventListener("click", () => addOPT("/"));
subBTN.addEventListener("click", () => addOPT("-"));
addBTN.addEventListener("click", () => addOPT("+"));
mulBTN.addEventListener("click", () => addOPT("*"));
oneBTN.addEventListener("click", () => addOPT("1"));
twoBTN.addEventListener("click", () => addOPT("2"));
threeBTN.addEventListener("click", () => addOPT("3"));
fourBTN.addEventListener("click", () => addOPT("4"));
fiveBTN.addEventListener("click", () => addOPT("5"));
sixBTN.addEventListener("click", () => addOPT("6"));
sevenBTN.addEventListener("click", () => addOPT("7"));
eightBTN.addEventListener("click", () => addOPT("8"));
nineBTN.addEventListener("click", () => addOPT("9"));
zeroBTN.addEventListener("click", () => addOPT("0"));
dZeroBTN.addEventListener("click", () => addOPT("00"));
dotBTN.addEventListener("click", () => addOPT("."));

eqlBTN.addEventListener("click", () => {
  results.innerText = eval(operations);
  operations = "";
});

clearBTN.addEventListener("click", () => {
  operations = "";
  results.innerText = "";
});
