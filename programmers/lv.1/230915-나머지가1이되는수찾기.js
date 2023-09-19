//https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  const arr = Array(n)
    .fill(n)
    .map((prev, curr) => curr + 1);
  const answer = arr.filter((el) => n % el === 1);
  return answer[0];
}

// 리팩토링 다시 시도해 볼 것
