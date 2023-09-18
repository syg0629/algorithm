//https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((value, index) => (index + 1) * x);
}
