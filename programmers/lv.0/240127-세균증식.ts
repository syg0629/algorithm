//https://school.programmers.co.kr/learn/courses/30/lessons/120910
export {};

function solution(n: number, t: number): number {
  return Math.pow(2, t) * n;
}

console.log(solution(2, 10)); //2048
console.log(solution(7, 15)); //229,376
