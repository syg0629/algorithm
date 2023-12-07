/**
 * 1부터 N까지 합 출력하기
 */
export {};

function solution(n: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(6)); //21
console.log(solution(10));
