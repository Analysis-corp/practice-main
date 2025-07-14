const template = `<div class="task-box">
        <div>
          <p>####</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
            onclick="taskCompleted()"
          >
            <path
              d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
            onclick="deleteTask(****)"
          >
            <path
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
            />
          </svg>
        </div>
      </div>`;

const tasks = [];

function addTask() {
  const taskInput = document.getElementById("task-tittle");
  const newTaskTittle = taskInput.value;

  console.log(newTaskTittle);
  tasks.push(newTaskTittle);
  console.log(tasks);
  rendertasks();
}

function rendertasks() {
  let finalContent = "";
  for (let task of tasks) {
    const taskContainer = document.getElementById("task-container");
    finalContent += template
      .replace("####", task)
      .replace("****", tasks.indexOf(task));
    taskContainer.innerHTML = finalContent;
  }

  console.log("new tasks rendered");
}

function deleteTask(index) {
  tasks.splice(index, 1);
  console.log("task deleted :", index);
  rendertasks();
}

function taskCompleted() {
  const taskCompleted =
    (template.innerHTML += `<div class="task-completed"></div>`);

  rendertasks();
}
