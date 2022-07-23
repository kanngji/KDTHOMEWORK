// const str = "Hello, World";
// // 진짜 말그대로 길이 1부터 시작
// console.log(str.length);

// console.log(str.indexOf("World"));
// // 0 이 나온다
// console.log(str.indexOf("H"));

// console.log(str.slice(0, 5));
// //원본은 바뀌지않는다
// console.log(str.replace("World", "뽀로로"));
// //원본 확인용
// console.log(str);

// let str = "우영";
// let longStr = str.repeat(10) + "우";
// console.log(longStr);

// //trim 손질이라는 뜻
// const str = "           Hello, world       ";
// //앞 뒤 공백 문자 제거하기
// console.log(str.trim());
// console.log(str);

// const pi = 3.1415926253897912342134123513251234214214;
// console.log(pi);

// let integer = parseInt(pi);
// let float = parseFloat(pi);

// console.log(integer);
// console.log(float);
// console.log(typeof integer, typeof float);

// console.log("abs: ", Math.abs(-999));
// console.log("min: ", Math.min(10, 33));
// console.log("max: ", Math.max(10, 33, 99));
// console.log("ceil: ", Math.ceil(3.14));
// console.log("floor: ", Math.floor(3.14));
// console.log("round: ", Math.round(3.4));
// console.log("random: ", Math.random());

// let nums = [-1.23, 13, 14.52, -33.53, 30];

// let minnum = Math.min(...nums);
// let maxnum = Math.max(...nums);

// minnum = Math.floor(minnum);
// maxnum = Math.floor(maxnum);

// let avg = (Math.abs(minnum) + Math.abs(maxnum)) / 2;
// console.log(avg);

// let numbers = [1, 2, 3, 4, 5, 6];
// //원본 배열이 볂나다
// //마지막에 추가 push
// numbers.push(7);
// console.log(numbers);

// //처음에 추가하기
// numbers.unshift(0);
// console.log(numbers);

// //마지막 요소 삭제 & 반환 pop
// console.log(numbers.pop());
// console.log(numbers);
// //첫 요소 삭제 & 반환 shift
// console.log(numbers.shift());

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// let numbersLength = numbers.length;
// let fruitsLength = fruits.length;

// console.log("numbers 배열의 길이는", numbersLength);
// console.log("fruits 배열의 길이는", fruitsLength);

//배열 합치기
// let numbers = [1, 2, 3, 4];
// let fruits = ["사과", "딸기", "수박"];

// console.log(numbers.concat(fruits));
// console.log(numbers);
// console.log(fruits);
// let hap = numbers.concat(fruits);
// console.log(hap);

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let number of numbers) {
//   console.log(number);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// numbers.forEach(function (number, index, array) {
//   console.log(number, index, array);
// });

// numbers.forEach((number, index, array) => {
//   console.log(number, index, array);
// });

// fruits.forEach(function (number, index, array) {
//   console.log(number, index, array);
// });

// fruits.forEach((number, index, array) => {
//   console.log(number, index, array);
// });

//배열의합

// let numbers = [1, 2, 3, 4, 5, 6];

// let foreach = numbers.forEach(function (number) {
//   return number;
// });

// console.log(foreach);

// let map = numbers.map(function (number) {
//   return number;
// });

// console.log(map);

// let map2 = numbers.map((number) => {
//   return number;
// });
// console.log(map2);

// const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];
// let obj = fruits.map((item, index) => {
//   return {
//     id: index,
//     name: item,
//   };
// });

// console.log(obj);

// let numbers = [1, 2, 3, 4, 5, 6];

// let reduce = numbers.reduce(function (sum, item, index, arr) {
//   console.log(sum, item, index, arr);
//   return sum + item;
// });

// let string = "apple";

// for (letter of string) {
//   console.log(letter);
// }

// [...string].forEach(function (letter, i, arr) {
//   console.log(letter, i, arr);
// });

// let numbers = [1, 2, 3, 4, 5, 6];
// let arr;

// arr = numbers.filter((num) => num > 3);
// console.log(arr);

// const words = [
//   "spary",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);
// console.log(result);

// let numbers1 = [1, 2, 3, 4, 5, 6];
// let numbers2 =
// console.log(numbers.includes(num));
// console.log(numbers.includes(7));

// let fruits1 = [
//   "사과",
//   "딸기",
//   "파인애플",
//   "수박",
//   "참외",
//   "오렌지",
//   "자두",
//   "망고",
// ];
// let fruite2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// let same = [];
// let same2 = [];
// let diff = [];
// let diff2 = [];

// same = fruits1.filter((item) => fruite2.includes(item));

// fruits1.forEach(function (item) {
//   if (fruite2.includes(item)) {
//     same2.push(item);
//   }
// });
