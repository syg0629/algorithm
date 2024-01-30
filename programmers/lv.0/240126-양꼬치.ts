// https://school.programmers.co.kr/learn/courses/30/lessons/120830
export {};

function solution(n: number, k: number): number {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}

console.log(solution(10, 3)); //124,000
console.log(solution(64, 6)); //768,000
