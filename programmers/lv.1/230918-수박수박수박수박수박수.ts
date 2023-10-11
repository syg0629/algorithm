//https://school.programmers.co.kr/learn/courses/30/lessons/12922
export {};

function solution(n: number): string {
  return "수박".repeat(n).slice(0, n);
}

console.log(solution(3)); //"수박수"
console.log(solution(4)); //"수박수박"
