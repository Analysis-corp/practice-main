const container = document.getElementById("container");
console.log(container);

for (let counter = 1; counter <= 5; counter++) {
  let color;
  if (counter === 0) {
    color = "red";
  }
  if (counter === 1) {
    color = "black";
  }
  if (counter === 2) {
    color = "teal";
  }
  if (counter === 3) {
    color = "lime";
  }
  if (counter === 4) {
    color = "orange";
  }
  container.innerHTML += `<div id='${counter}' class='color-box' style='background-color:${color}'></div>`;

  //   switch (counter) {
  //     case 0: {
  //       container.innerHTML += `<div id='${
  //         counter + 1
  //       }' class='color-box' style='background-color:red'></div>`;
  //       break;
  //     }
  //     case 1: {
  //       container.innerHTML += `<div id='${
  //         counter + 1
  //       }' class='color-box' style='background-color:yellow'></div>`;
  //       break;
  //     }
  //     case 2: {
  //       container.innerHTML += `<div id='${
  //         counter + 1
  //       }' class='color-box' style='background-color:teal'></div>`;
  //       break;
  //     }
  //     case 3: {
  //       container.innerHTML += `<div id='${
  //         counter + 1
  //       }' class='color-box' style='background-color:orange'></div>`;
  //       break;
  //     }
  //     case 4: {
  //       container.innerHTML += `<div id='${
  //         counter + 1
  //       }' class='color-box' style='background-color:black'></div>`;
  //       break;
  //     }
  //   }
}

for (let counter = 1; counter <= 5; counter++) {
  document.getElementById(counter).outerHTML = "<p>deleted</p>";
}
