const networker = {
  get: () => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "http://195.177.255.229:3009/get", true);
    ajax.send();
    ajax.onload = (event) => {
      const response = JSON.parse(event.target.responseText);
      tasks = response;
      console.log("data : ", response);
      renderTasks();
    };
  },

  set: () => {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "http://195.177.255.229:3009/set", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tasks));
    ajax.onload = (event) => {
      console.log("sent data !");
    };
  },
};

function getData() {
  networker.get();
}

function setData() {
  networker.set();
}

const inputTittle = document.querySelector("#input-tittle");
const createBTN = document.querySelector("#create-btn");
const taskContainer = document.querySelector("#task-container");

let tasks = [];

createBTN.addEventListener("click", () => {
  // tasks.push(inputTittle.value);
  if (!inputTittle.value) return;
  tasks.push({
    tittle: inputTittle.value,
    isSpecial: false,
    date: new Date(),
    list: [],
  });
  console.log("new task created :", tasks);
  inputTittle.value = "";

  renderTasks();
});

function specialize(index) {
  console.log("task is special :", index);
  tasks[index].isSpecial = true;
  console.log(tasks);
  renderTasks();
}

function deleteTask(index) {
  console.log("task deleted:", index);
  tasks.splice(index, 1);

  // tasks = tasks.filter((_t, i) => i !== index);
  // tasks = tasks.filter((_task, i) => {
  //   if (index === i) return false;
  //   return true;
  // });
  renderTasks();
}

function renderTasks() {
  taskContainer.innerHTML = "";

  for (let counter = 0; counter < tasks.length; counter++) {
    // create number  container , add task number
    const numberContainer = document.createElement("div");
    numberContainer.classList.add("number-container");
    const taskNumber = document.createElement("p");
    taskNumber.classList.add("task-number");
    taskNumber.innerText = counter;
    numberContainer.appendChild(taskNumber);
    taskContainer.appendChild(numberContainer);

    // task container
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    taskContainer.appendChild(newTask);

    //task header
    const taskHeader = document.createElement("div");
    taskHeader.classList.add("task-header");
    newTask.appendChild(taskHeader);

    //task complete condition
    if (tasks[counter].isSpecial) {
      newTask.classList.add("task-compeleted");
    }

    // console.log(taskContainer);

    //tittle p tag , date span tag
    const newTittle = document.createElement("p");
    newTittle.innerText = tasks[counter].tittle;
    taskHeader.appendChild(newTittle);

    const newDate = document.createElement("span");
    const date = new Date(tasks[counter].date);
    newTittle.appendChild(newDate);

    // console.log(date);
    newDate.innerText = `${date.getFullYear()}/ ${
      date.getMonth() + 1
    }/${date.getDate()}`;

    //add img
    const imageContainer = document.createElement("div");

    //done image
    const doneImage = document.createElement("img");
    doneImage.src = "./assets/done.svg";
    imageContainer.appendChild(doneImage);
    doneImage.addEventListener("click", () => specialize(counter));

    //delete image
    const deleteImage = document.createElement("img");
    deleteImage.src = "./assets/delete.svg";
    imageContainer.appendChild(deleteImage);
    deleteImage.addEventListener("click", () => deleteTask(counter));

    taskHeader.appendChild(imageContainer);

    //add task list
    const taskList = document.createElement("div");
    taskList.classList.add("task-list");
    newTask.appendChild(taskList);

    //list creater
    const newListTittle = document.createElement("input");
    newListTittle.placeholder = "task tittle";
    newListTittle.id = `list-tittle-input-${counter}`;
    taskList.appendChild(newListTittle);
    newListTittle.innerText = newListTittle.value;

    const newListBtn = document.createElement("button");
    newListBtn.innerText = "Create";
    taskList.appendChild(newListBtn);

    newListBtn.addEventListener("click", () => {
      const newInputTittle = document.getElementById(
        `list-tittle-input-${counter}`
      );
      // console.log(newInputTittle);
      tasks[counter].list.push({
        tittle: newListTittle.value,
        isDone: false,
      });

      console.log(tasks);

      renderTasks();
    });

    //ul list create
    const newListUL = document.createElement("ul");
    taskList.appendChild(newListUL);

    for (
      let LICounter = 0;
      LICounter < tasks[counter].list.length;
      LICounter++
    ) {
      const newListLI = document.createElement("li");
      newListLI.id = `list-li-${counter}-${LICounter}`;

      const newListCheckBox = document.createElement("input");
      newListCheckBox.type = "checkbox";

      if (tasks[counter].list[LICounter].isDone) {
        newListCheckBox.checked = true;
      }

      newListCheckBox.addEventListener("click", () => {
        tasks[counter].list[LICounter].isDone =
          !tasks[counter].list[counter].isDone;

        renderTasks();
      });

      const newListSpan = document.createElement("span");
      newListSpan.innerText = tasks[counter].list[LICounter].tittle;

      newListLI.appendChild(newListCheckBox);
      newListLI.appendChild(newListSpan);

      newListUL.appendChild(newListLI);
    }
  }
}
