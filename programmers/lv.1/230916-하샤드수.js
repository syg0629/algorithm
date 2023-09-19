//https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((p, c) => p + Number(c), 0);
  return x % sum === 0 ? true : false;
}
