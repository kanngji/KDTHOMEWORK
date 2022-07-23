//일단 filter 써서 해당 되는 요소들 추출하기

let arr = [5, 9, 7, 10];
let divisor = 5;
let numbers;

numbers = arr.filter((num) => num % divisor === 0);
// console.log(numbers);

//오름차순 정렬해야하는데
//numbers.length 만큼 for문 돌면서
//math.min을 push 해주자

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
