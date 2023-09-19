//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return String(n)
    .split("")
    .reduce((prev, curr) => prev + Number(curr), 0);
}
