//https://school.programmers.co.kr/learn/courses/30/lessons/120845
export {};

function solution(box: number[], n: number): number {
  const answer = box.map((x) => Math.floor(x / n)).reduce((a, b) => a * b, 1);
  return answer;
}

console.log(solution([1, 1, 1], 1)); //1
console.log(solution([10, 8, 6], 3)); //12
