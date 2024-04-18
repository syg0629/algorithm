//https://school.programmers.co.kr/learn/courses/30/lessons/181835
export {};

function solution(arr: number[], k: number): number[] {
  return arr.map((x) => (k % 2 ? x * k : x + k));
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)); //[3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); //[3, 4, 5, 102, 101, 100]
