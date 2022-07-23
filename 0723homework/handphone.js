//전화번호가 문자열로 주어졌을떄 전화번호의 뒷 4자리를 제외
//나머지숫자를 전부 *로 가린 문자열을 리턴

//사고흐름
//문자열 length를 받아 -4를 하면 *처리할 index구해진다
//이 length를 wantidx로 설정
//다음 문자열에서 for문을  wantidx까지 돌리면서
//replace를 해주면 될거같은데?

//일단 이거 안먹히고
// //예시
// let phone_number = "01033334444";
// //console.log(phone_number.length); 원한대로 11 나옴

// let wantidx = phone_number.length - 4;
// //console.log(wantidx); 원한대로 7나옴

// for (let i = 0; i < wantidx; i++) {
//   console.log("작동");
//   console.log(phone_number[i]);
//   phone_number[i] = 9;
// }
// console.log("hello", phone_number);

let phone_number = "01033334444";
let wantidx = phone_number.length - 4;

let sliced = phone_number.slice(0, wantidx);
let sliced2 = phone_number.slice(wantidx);
console.log(sliced);
console.log(sliced2);

console.log("hi");
let star = "*";
let answer = star.repeat(wantidx);
answer += sliced2;

console.log(answer);
