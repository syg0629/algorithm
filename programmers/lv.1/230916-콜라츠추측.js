//https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let count = 0;
  while (count < 501) {
    if (num === 1) return count;

    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }
  return (count = -1);
}
