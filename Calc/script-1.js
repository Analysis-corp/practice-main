const buttons = document.getElementsByClassName("btn");
// console.log(buttons);
const results = document.getElementById("results");
let operation = "";

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.id == "=") {
      results.innerText = eval(operation);
      return (operation = "");
    }

    if (button.id == "clear") {
      results.innerText = "";
      return (operation = "");
    }

    operation += button.id;
    results.innerText = operation;
  });
}
