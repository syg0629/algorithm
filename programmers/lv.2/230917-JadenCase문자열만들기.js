//https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  s = s.toLowerCase().split(" ");
  copyS = s.map((n) => n.charAt().toUpperCase());
  s = s.map((n, i) => n.replace(n.charAt(), copyS[i]));
  return s.reduce((prev, curr) => prev + " " + curr);
}
