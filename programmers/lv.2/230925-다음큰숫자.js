//https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let sum = 0;
  let arr = String(n.toString(2)).split("");
  let numX = arr.filter((x) => x == 1).length;

  for (let i = 1; i < 1000000; i++) {
    sum = (n + i).toString(2);
    sum = String(sum.toString(2)).split("");
    if (numX === sum.filter((x) => x == 1).length) {
      return parseInt(sum.join(""), 2);
      break;
    }
  }
}
