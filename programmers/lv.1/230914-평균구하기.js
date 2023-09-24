//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((x, y) => x + y, 0) / arr.length;
}
