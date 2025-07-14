const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");

const box2d = document.getElementById("box-2d-1");
for (let r = 0; r <= 255; r++) {
  let temp = "";
  for (let g = 0; g <= 255; g++) {
    temp += `<div style="background-color:rgb(${r},${g},0)"></div>`;
  }
  box2d.innerHTML += `<div>${temp}</div>`;
}

// const Rlimit = 20;
// const Glimit = 10;

// for (let R = 0; R < Rlimit; R++) {
//   for (let G = 0; G < Glimit; G++) {
//     box1.innerHTML += `<div style="background-color:rgb(${R},${G},0)"></div>`;
//   }
// }

// console.log(box1.innerHTML);

// for (let r = 0; r <= 255; r++) {
//   box1.innerHTML += `<div style="background-color:rgb(${r},${
//     r / 1.5
//   },0)"></div>`;
// }

// for (let g = 0; g <= 255; g++) {
//   box2.innerHTML += `<div style="background-color:rgb(0,${g},0)"></div>`;
// }

// for (let b = 0; b <= 255; b++) {
//   box3.innerHTML += `<div style="background-color:rgb(0,0,${b})"></div>`;
// }
