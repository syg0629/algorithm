// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  arr = arr.filter((n) => n !== Math.min(...arr));
  return arr.length === 0 ? [-1] : arr;
}
