//할 일 입력창
const inputBox = document.getElementById("inputField");
//버튼
const addToDo = document.getElementById("addToDo");
//할 일 리스트창
const toDoList = document.getElementById("toDoList");

addToDo.addEventListener("click", function () {
  // 'li'태그만들기
  let list = document.createElement("li");
  if (!inputBox.value) {
    alert("내용을 입력해 주세요!");
  } else {
    list.innerText = inputBox.value;
    toDoList.appendChild(list); //할 일 리스트창에 자식으로 붙이기
    inputBox.value = ""; //할 일 입력창 초기화
  }

  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
  });
  list.addEventListener("dblclick", function () {
    toDoList.removeChild(list);
  });
});
