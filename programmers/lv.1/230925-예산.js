//https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((x, y) => x + y, 0) > budget) {
    d.pop();
  }
  return d.length;
}
