// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let sum = 0;
  while (left <= right) {
    if (Number.isInteger(Math.sqrt(left))) {
      sum += left++ * -1;
    } else {
      sum += left++;
    }
  }
  return sum;
}
