//https://school.programmers.co.kr/learn/courses/30/lessons/181889
export {};

function solution(num_list: number[], n: number): number[] {
  return num_list.slice(0, n);
}

console.log(solution([2, 1, 6], 1)); //[2]
console.log(solution([5, 2, 1, 7, 5], 3)); //[5, 2, 1]
