// https://school.programmers.co.kr/learn/courses/30/lessons/120868
export {};

function solution(sides: number[]): number {
  const max: number = Math.max(...sides);
  const min: number = Math.min(...sides);
  let cnt: number = 0;
  for (let i = max - min + 1; i < max + min; i++) {
    cnt++;
  }
  return cnt;
}

console.log(solution([1, 2])); //1
console.log(solution([3, 6])); //5
console.log(solution([11, 7])); //13
