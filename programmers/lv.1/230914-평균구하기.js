//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((p, c) => p + c, 0) / arr.length;
}
