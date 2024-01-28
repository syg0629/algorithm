//https://school.programmers.co.kr/learn/courses/30/lessons/120841
export {};

function solution(dot: number[]): number {
  const [num1, num2] = dot;
  return num1 > 0 ? (num2 > 0 ? 1 : 4) : num2 < 0 ? 3 : 2;
}

console.log(solution([2, 4])); //1
console.log(solution([-7, 9])); //2
