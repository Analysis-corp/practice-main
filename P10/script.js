const inputTittle = document.querySelector("#input-tittle");
const createBTN = document.querySelector("#create-btn");
const taskContainer = document.querySelector("#task-container");

const tasks = [];

createBTN.addEventListener("click", () => {
  tasks.push(inputTittle.value);
  console.log("new task created :", tasks);
  inputTittle.value = "";
});

function renderTasks() {
  taskContainer.innerHTML = "";
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  const numberContainer = document.createElement("div");
  numberContainer.classList.add("number-container");
  const taskNumber = document.createElement("p");
  taskNumber.classList.add("task-number");
}
