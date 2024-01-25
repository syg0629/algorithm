//https://school.programmers.co.kr/learn/courses/30/lessons/120831
export {};

function solution(n: number): number {
  let sum: number = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10)); //30
console.log(solution(4)); //6
