//https://school.programmers.co.kr/learn/courses/30/lessons/181892
export {};

function solution(num_list: number[], n: number): number[] {
  return num_list.filter((_, i: number) => i >= n - 1);
}

console.log(solution([2, 1, 6], 3)); //	[6]
console.log(solution([5, 2, 1, 7, 5], 2)); //[2, 1, 7, 5]
