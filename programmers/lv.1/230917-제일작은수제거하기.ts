// https://school.programmers.co.kr/learn/courses/30/lessons/12935
export {};

function solution(arr: number[]): number[] {
  arr = arr.filter((n: number) => n !== Math.min(...arr));
  return arr.length === 0 ? [-1] : arr;
}

console.log(solution([4, 3, 2, 1])); //[4,3,2]
console.log(solution([10])); //[-1]
