//https://school.programmers.co.kr/learn/courses/30/lessons/120862
export {};

function solution(numbers: number[]): number {
  const orderedNum = [...numbers].sort((a, b) => b - a);
  return Math.max(
    orderedNum[0] * orderedNum[1],
    orderedNum[orderedNum.length - 1] * orderedNum[orderedNum.length - 2]
  );
}

console.log(solution([1, 2, -3, 4, -5])); //15
console.log(solution([0, -31, 24, 10, 1, 9])); //240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); //600
console.log(solution([-1, 1])); //-1
