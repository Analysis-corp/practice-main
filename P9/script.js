const myDiv = document.querySelector(".my-div");
console.log(myDiv);

console.log("---".repeat(10));

const newElement = document.createElement("div");
console.log("new element : ", newElement);
newElement.setAttribute("data-name", "negar");

console.log("Att set :", newElement.getAttribute("data-name"));

console.log(myDiv.classList);
myDiv.classList.toggle("myclass2");
console.log(myDiv.classList);
myDiv.classList.remove("myclass2");
console.log(myDiv.classList);

console.log("---".repeat(10));

console.log(newElement.children);

const tittle = document.createElement("p");

newElement.appendChild(tittle);
console.log("new child is :", newElement.children);
