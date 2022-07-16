// single element

// const form = documnet.getElementById("todo-form");
// console.log(document.getElementById("todo-form"));

// const form = document.querySelector("#todo-form");
// console.log(form);

// multiple element
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   console.log(item);
// });

// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

const todos = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");
// todos.style.background = "red";
// console.log(todos.lastElementChild);

const button = document.querySelector(".submit");
// console.log(button);

button.addEventListener("click", function (e) {
  //기본적으로 일어나는 이벤트가 방지된다
  e.preventDefault();

  if (todoInput.value === "") {
    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 2000);
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));
  console.log(li);
  //해당 style먹이기위해
  li.classList.add("item");
  todos.appendChild(li);
  todoInput.value = "";
});
