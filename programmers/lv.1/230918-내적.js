//https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((p, c, i) => p + c * b[i], 0);
}
