//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return String(n)
    .split("")
    .reduce((x, y) => x + Number(y), 0);
}
