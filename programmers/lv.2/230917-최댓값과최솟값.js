//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  s = s.split(" ").sort((a, b) => a - b);
  return s.shift() + " " + s.pop();
}
