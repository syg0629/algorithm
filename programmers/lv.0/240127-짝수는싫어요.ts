//https://school.programmers.co.kr/learn/courses/30/lessons/120813
export {};

function solution(n: number): number[] {
  const odds: number[] = [];
  for (let i = 1; i <= n; i += 2) {
    odds.push(i);
  }
  return odds;
}

console.log(solution(10)); //[1, 3, 5, 7, 9]
console.log(solution(15)); //[1, 3, 5, 7, 9, 11, 13, 15]
