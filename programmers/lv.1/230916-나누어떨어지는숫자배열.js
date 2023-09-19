//https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  arr = arr.filter((n) => n % divisor === 0);
  return arr.length !== 0 ? arr.sort((a, b) => a - b) : [-1];
}
