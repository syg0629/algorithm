// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let answer = [];
  arr.forEach((_, i) => (arr[i] !== arr[i + 1] ? answer.push(arr[i]) : ""));
  return answer;
}
