let n = 123;
let newN,
  sum = 0;
while (n > 0) {
  newN = n % 10;
  sum += newN;
  //자바스크립트 몫 구하려면 이렇게
  n = parseInt(n / 10);
}
console.log(sum);
