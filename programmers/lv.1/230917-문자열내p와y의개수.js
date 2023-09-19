//https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let pCount = 0;
  let yCount = 0;
  s.toUpperCase()
    .split("")
    .forEach((n) => (n === "P" ? pCount++ : n === "Y" ? yCount++ : ""));
  if (pCount === yCount) {
    return true;
  }
  return false;
}

// 리팩토링 다시 시도해 볼 것
