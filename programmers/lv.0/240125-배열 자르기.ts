//https://school.programmers.co.kr/learn/courses/30/lessons/120833
export {};
function solution(numbers: number[], num1: number, num2: number): number[] {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3)); //[2, 3, 4]

console.log(solution([1, 3, 5], 1, 2)); //[3, 5]
