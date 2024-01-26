// https://school.programmers.co.kr/learn/courses/30/lessons/120830
export {};

function solution(n: number, k: number): number {
  let free = 0;
  if (n >= 10) {
    free = Math.floor(n / 10);
    return n * 12000 + (k - free) * 2000;
  } else {
    return n * 12000 + k * 2000;
  }
}

console.log(solution(10, 3)); //124,000
console.log(solution(64, 6)); //768,000
