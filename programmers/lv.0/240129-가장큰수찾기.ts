//https://school.programmers.co.kr/learn/courses/30/lessons/120899
export {};

function solution(array: number[]): number[] {
  let max: number = 0;
  let idx: number = 0;
  for (const [i, x] of array.entries()) {
    if (max < x) {
      max = x;
      idx = i;
    }
  }
  return [max, idx];
}

console.log(solution([1, 8, 3])); //[8, 1]
console.log(solution([9, 10, 11, 8])); //[11, 2]
