//https://school.programmers.co.kr/learn/courses/30/lessons/120847
export {};

function solution(numbers: number[]): number {
  const orderedNums = numbers.sort((a, b) => b - a);
  return orderedNums[0] * orderedNums[1];
}

console.log(solution([1, 2, 3, 4, 5])); //20
console.log(solution([0, 31, 24, 10, 1, 9])); //744
