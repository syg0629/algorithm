// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  let arr = [s[0]];
  s = s.split("");

  for (let i = 1; i < s.length; i++) {
    arr.at(-1) === s[i] ? arr.pop() : arr.push(s[i]);
  }
  return arr.length === 0 ? 1 : 0;
}
