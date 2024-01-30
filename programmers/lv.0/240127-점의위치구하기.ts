//https://school.programmers.co.kr/learn/courses/30/lessons/120841
export {};

function solution(dot: number[]): number {
  const [x, y] = dot;
  return x > 0 ? (y > 0 ? 1 : 4) : y < 0 ? 3 : 2;
}

console.log(solution([2, 4])); //1
console.log(solution([-7, 9])); //2
