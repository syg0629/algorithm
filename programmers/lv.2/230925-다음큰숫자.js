//https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let sum = 0;
  let numX = String(n.toString(2))
    .split("")
    .filter((x) => x == 1).length;

  for (let i = 1; i < n; i++) {
    sum = String((n + i).toString(2)).split("");
    if (numX === sum.filter((x) => x == 1).length) {
      return parseInt(sum.join(""), 2);
    }
  }
}
