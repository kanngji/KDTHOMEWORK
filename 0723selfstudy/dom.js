// let boxEl = document.querySelector(".box");

// console.log(boxEl);
// console.log(boxEl.classList.contains("orange"));

// boxEl.addEventListener("click", function () {
//   boxEl.classList.add("orange");
//   console.log(boxEl);
//   console.log(boxEl.classList.contains("orange"));
// });

// .box를 최초 클릭하면 배경을 orange 색으로 변경하기
// .box를 다시 클릭 했을 때 배경이 orange 색이면 skyblue
// 로 변경하거나 skyblue면 orange로 변경하는 페이지 만들기
let boxEl = document.querySelector(".box");

boxEl.addEventListener("click", function () {
  if (boxEl.classList.contains("orange")) {
    boxEl.classList.remove("orange");
    boxEl.classList.add("skyblue");
  } else {
    boxEl.classList.remove("skyblue");
    boxEl.classList.add("orange");
  }
});
