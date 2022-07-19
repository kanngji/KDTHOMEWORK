// ########################
// JS 구현

const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const inputContent = document.querySelector("#content");
//버튼 쿼리셀렉터
const btn = document.querySelector("button");
let targetDel = "";

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

calendar.addEventListener("click", function (e) {
  // 클릭된 요소의 종류에 따라 각각의 기능을 수행
  if (e.target.tagName === "P") {
    // 날짜(P 태그)가 클릭이 되면 부모 요소를 전역 변수에 저장하여 위치 전달
    date.value = e.target.textContent;
    targetEl = e.target.parentNode;
  } else {
    // 테이블 TD가 클릭 되면 TD를 전역 변수에 저장하여 위치 전달
    date.value = e.target.firstChild.textContent;
    targetEl = e.target;
  }
});

// 작성 버튼이 클릭 되면 실행되는 함수
function writeSchedule() {
  // 클릭한 요소에 정상적으로 추가 되는지 확인하기 위한 테스트 코드
  //   targetEl.append("1234");
  //일단 밸류값 받아왔고
  let msg = inputContent.value;
  console.log(msg);
  targetEl.append(msg);
  console.log(targetEl.innerText);
  targetDel = targetEl.innerText;
}
console.log(targetDel);

targetDel.addEventListener("click", function (e) {
  //날짜가 p태그에 감싸져있었으니 p태그가 아니면 문자일거라는 생각
  if (e.target.tagName !== "p") {
    e.target.parentNode.remove();
  }
});
