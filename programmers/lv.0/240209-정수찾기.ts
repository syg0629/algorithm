//https://school.programmers.co.kr/learn/courses/30/lessons/181889
export {};

function solution(num_list: number[], n: number): number {
  return num_list.includes(n) ? 1 : 0;
}

console.log(solution([1, 2, 3, 4, 5], 3)); //1
console.log(solution([15, 98, 23, 2, 15], 20)); //0
