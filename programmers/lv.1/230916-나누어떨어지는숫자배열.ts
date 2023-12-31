//https://school.programmers.co.kr/learn/courses/30/lessons/12910
export {};

function solution(arr: number[], divisor: number): number[] {
  arr = arr.filter((n: number) => n % divisor === 0);
  return arr.length !== 0 ? arr.sort((a: number, b: number) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5)); //[ 5, 10 ]
console.log(solution([2, 36, 1, 3], 1)); //[ 1, 2, 3, 36 ]
console.log(solution([3, 2, 6], 10)); //[-1]
