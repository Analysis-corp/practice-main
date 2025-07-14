console.log("mehran");

let myArray = [1, 2, 3];

for (let counter = 0; counter < 5; counter++) {
  console.log("loop :", counter);
}

// for (let tavan = 0; tavan < 6; tavan ** 2) {
//   console.log("tavan :", tavan);
// }

for (let elem of myArray) {
  console.log("Equal : ", Math.pow(elem, 2));
}

const myArray2 = ["a", "b", "c"];
for (let index in myArray2) {
  console.log("loop for : ", index);
}

let shomarande = 0;
while (shomarande < 4) {
  console.log("barabar : ", shomarande);
  shomarande++;
}
