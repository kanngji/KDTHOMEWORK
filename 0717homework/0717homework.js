const input = document.querySelector("#todo");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
const alert = document.querySelector("span");

// '+' 버튼 익명 화살표 함수
const addTodo = () => {
  if (input.value !== "") {
    const item = document.createElement("div");
    // 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // text
    const text = document.createElement("span");
    // 제거하기 버튼
    const deleteButton = document.createElement("button");
    //제거하기 아이콘으루 구현하기
    deleteButton.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';

    text.textContent = input.value;
    input.value = "";

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(deleteButton);
    todoList.appendChild(item);

    // 체크박스 이벤트 리스너
    //change 이벤트리스너란?
    //변동이 있을떄마다 발동한다.
    checkbox.addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        text.style.textDecoration = "line-through";
      } else {
        text.style.textDecoration = "none";
      }
    });

    // 제거하기 버튼 클릭 이벤트 리스너
    deleteButton.addEventListener("click", (event) => {
      todoList.removeChild(event.currentTarget.parentNode);
    });
    input.value = "";
    alert.textContent = "";
  }
  //text창에 빈값을 넣고 + 버튼을 넣었을때
  // input.value === ""
  else {
    alert.style.color = "red";
    alert.textContent = "할 일을 입력하세요!";
  }
};

addButton.addEventListener("click", addTodo);

// 할 일 입력창에서 enter key가 눌렸을 때
input.addEventListener("keypress", (event) => {
  const ENTER = 13;
  if (event.keyCode === ENTER) addTodo();
});
