//https://school.programmers.co.kr/learn/courses/30/lessons/42747
export {};

function solution(citations: number[]): number {
  citations.sort((a: number, b: number) => b - a);
  for (const [index, value] of citations.entries()) {
    const paperNum = index + 1;
    if (paperNum === value) return paperNum;
    if (paperNum > value) return paperNum - 1;
  }
  return citations.length;
}

console.log(solution([3, 0, 6, 1, 5])); //3
console.log(solution([9, 7, 6, 2, 1])); //3
console.log(solution([10, 8, 5, 4, 2])); //4
console.log(solution([25, 8, 5, 3, 3])); //3
console.log(solution([3, 4])); //2
