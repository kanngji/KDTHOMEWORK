// const superman = {
//   name: "clark",
//   age: 33,
//   fly: function () {
//     console.log("날아갑니다");
//   },
// };
// superman.fly;

// console.log(superman);
// console.log(superman["name"]);
// console.log(superman.name);

// //객체 속성 추가
// superman.gender = "male";

// console.log(superman.gender);

// delete superman.gender;
// console.log(superman.gender);

// console.log(superman.birthDay); //undefined
// console.log("birthDay" in superman); //false
// console.log("age" in superman); //true

//for ... in 반복문
// for (let key in superman) {
//   console.log(key);
//   console.log(superman[key]);
// }

// superman.fly();
// const user = {
//   name: "Mike",
//   sayHello: function () {
//     console.log(`Hello, I'm ${user.name}`);
//   },
// };

// user.sayHello();

// let boy = {
//   name: "Mike",
//   sayHello,
// };

// let girl = {
//   name: "Jane",
//   sayHello,
// };

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }

// boy.sayHello();
// girl.sayHello();

//실습
//pororo객체에 뽀로로의 이름을 출력하는 method 출력하기

// const pororo = {
//   name: "뽀로로",
//   age: 10,
//   height: 100,
//   weight: 50,
//   showHeight() {
//     console.log(`pororo의 이름은${this.height}입니다`);
//   },
// };
// console.log(pororo.name);

// pororo.showHeight();

// 화살표 함수와 this
//화살표 함수는 일반 함수와는 달리
// 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면
// 그 this는 외부에서 값을 가져옴

// let sayHello = () => {
//   console.log(`Hello, I'm ${this.name}`);
//   console.log(this);
// };

// let boy = {
//   name: "Mike",
//   sayHello,
// };

// let girl = {
//   name: "Jane",
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();

// Object

// const superman = {
//     name:'clark',
//     age:33
// }

// 생성자 함수

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// let user1 = new User("Mike", 30);
// let user2 = new User("Jane", 22);
// let user3 = new User("Tom", 17);

// user3.sayName();

// function Fruits(name, price) {
//   this.name = name;
//   this.price = price;
//   this.showPrice = function () {
//     console.log(`${this.name}의 가격은 ${this.price}입니다`);
//   };
// }

// let apple = new Fruits("apple", 3000);
// let pineapple = new Fruits("pineapple", 5000);
// let banana = new Fruits("banana", 2000);
// let tomato = new Fruits("tomato", 7000);

// apple.showPrice();
// console.log(apple.name);

// 생성자 [함수]!!!
// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showInfo = function () {
//     console.log(`${this.name}이고 성별은 ${this.gender}입니다`);
//   };
// }

// const jihoon = new Kdt("강지훈", "남자");
// jihoon.showInfo();

// DOM (Document Object Model)
// html 문서 요소의집합
// html 문서는 각각의 node와 object의 집합으로
// 문서 표헌
// 따라서 각각 node 또는 object에 접근하여 문서 구조/
// 스타일/내용 등을 변경 할 수 있도록 하는 것!
