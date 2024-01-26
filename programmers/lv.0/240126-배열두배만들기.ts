//https://school.programmers.co.kr/learn/courses/30/lessons/120809
export {};

function solution(numbers: number[]): number[] {
  const doubling = numbers.map((x: number) => x * 2);
  return doubling;
}

console.log(solution([1, 2, 3, 4, 5])); //[2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])); //[2, 4, 200, -198, 2, 4, 6]
