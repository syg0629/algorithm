//https://school.programmers.co.kr/learn/courses/30/lessons/12933
export {};

function solution(n: number): number {
  return Number(String(n).split("").sort().reverse().join(""));
}

console.log(solution(118372)); //873211
