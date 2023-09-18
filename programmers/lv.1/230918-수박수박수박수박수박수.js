//https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  let str = "";
  let cnt = 1;
  while (cnt <= n) {
    cnt % 2 === 0 ? (str += "박") : (str += "수");
    cnt++;
  }
  return str;
}

//repeat()...
