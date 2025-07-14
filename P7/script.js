const container = document.getElementById("container");
console.log(container);
console.log("--".repeat(10));

console.log(container.innerHTML);

container.innerHTML += "<p>mehran</p>";
console.log(container.innerHTML);

console.log("--".repeat(10));

for (let i = 0; i < 5; i++) {
  //   let color = "";

  //   if (i === 0) {
  //     color = "red";
  //   }
  //   if (i === 1) {
  //     color = "orange";
  //   }
  //   if (i === 2) {
  //     color = "black";
  //   }
  //   if (i === 3) {
  //     color = "teal";
  //   }
  //   if (i === 4) {
  //     color = "lime";
  //   }
  container.innerHTML += `<div class='color-box' style='background-color:rgb(${
    (i / 5) * 255
  },0,0)'></div>`;
}

const text = document.getElementById("text");
console.log(text);
console.log((text.style.color = "red"));
