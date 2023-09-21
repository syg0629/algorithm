//https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let arr = [];
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    arr += s[i]
      .split("")
      .reduce(
        (p, c, idx) => p + (idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase()),
        ""
      );
    arr += " ";
  }
  return arr.slice(0, -1);
}
