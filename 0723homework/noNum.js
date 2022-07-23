function solution(numbers) {
  //0~9 까지 합을 걍 주었다
  let hap = 45;

  var answer = 0;
  //forEach로 numbers의 요소를 더한 값을 answer에 다 더하고
  //answer=hap-answer하면 없는 숫자의 합이 나옴
  numbers.forEach(function (num) {
    answer += num;
  });
  answer = hap - answer;
  return answer;
}
