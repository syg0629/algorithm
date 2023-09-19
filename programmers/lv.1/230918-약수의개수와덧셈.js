// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let arr = [];
  while (left <= right) {
    if (Number.isInteger(Math.sqrt(left))) {
      arr.push(left++ * -1);
    } else {
      arr.push(left++);
    }
  }
  return arr.reduce((prev, curr) => prev + curr, 0);
}
