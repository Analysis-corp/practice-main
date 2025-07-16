const inputTittle = document.querySelector("#input-tittle");
const createBTN = document.querySelector("#create-btn");
const taskContainer = document.querySelector("#task-container");

const tasks = [];

createBTN.addEventListener("click", () => {
  // tasks.push(inputTittle.value);
  tasks.push({
    tittle: inputTittle.value,
  });
  console.log("new task created :", tasks);
  inputTittle.value = "";

  renderTasks();
});

function renderTasks() {
  taskContainer.innerHTML = "";
  for (let counter = 0; counter < tasks.length; counter++) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    // create number  container , add task number
    const numberContainer = document.createElement("div");
    numberContainer.classList.add("number-container");
    const taskNumber = document.createElement("p");
    taskNumber.classList.add("task-number");
    taskNumber.innerText = counter;

    numberContainer.appendChild(taskNumber);
    taskContainer.appendChild(numberContainer);

    // console.log(taskContainer);

    //create tittle
    const newTittle = document.createElement("p");
    newTittle.innerText = tasks[counter].tittle;
    newTask.appendChild(newTittle);
    console.log(newTask);
    taskContainer.appendChild(newTask);

    //add img
    const imageContainer = document.createElement("div");
  }
}
