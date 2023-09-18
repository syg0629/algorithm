//https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return signs
    .map((b, i) => (b ? absolutes[i] : absolutes[i] * -1))
    .reduce((prev, curr) => prev + curr, 0);
}
