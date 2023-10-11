//https://school.programmers.co.kr/learn/courses/30/lessons/12982
export {};

function solution(d: number[], budget: number): number {
  d.sort((a: number, b: number) => a - b);
  while (d.reduce((x: number, y: number) => x + y, 0) > budget) {
    d.pop();
  }
  return d.length;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4
