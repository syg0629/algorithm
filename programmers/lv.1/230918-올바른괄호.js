// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let answer = false;
  return s.split("").shift() + s.split("").pop() === "()" ? !answer : answer;
}
