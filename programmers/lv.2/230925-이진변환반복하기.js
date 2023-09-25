//https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let remove = 0;
  let count = 0;
  while (s.length > 1) {
    s = s.split("");
    remove += s.filter((x) => x == 0).length;
    s = s.filter((x) => x != 0);
    s = s.length.toString(2);
    count++;
  }
  return [count, remove];
}
