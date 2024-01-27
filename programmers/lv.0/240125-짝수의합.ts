//https://school.programmers.co.kr/learn/courses/30/lessons/120831
export {};

function solution(n: number): number {
  let sum: number = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(solution(10)); //30
console.log(solution(4)); //6
