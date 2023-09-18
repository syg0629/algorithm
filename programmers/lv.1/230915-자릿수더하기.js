//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  var answer = 0;
  const arr = String(n).split("");
  arr.forEach((el) => (answer += Number(el)));
  return answer;
}
