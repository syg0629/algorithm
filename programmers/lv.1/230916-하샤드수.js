//https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let sum = 0;
  String(x)
    .split("")
    .forEach((n) => (sum += Number(n)));
  if (x % sum === 0) {
    return true;
  }
  return false;
}
