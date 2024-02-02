//https://school.programmers.co.kr/learn/courses/30/lessons/120848
export {};

function solution(n: number): number {
  let factorial: number = 1;
  let answer: number = 0;
  let i: number = 1;
  while (factorial <= n) {
    i++;
    answer++;
    factorial *= i;
  }
  return answer;
}

console.log(solution(3628800)); //10
console.log(solution(7)); //3
