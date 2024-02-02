//https://school.programmers.co.kr/learn/courses/30/lessons/120890
export {};

function solution(array: number[], n: number): number {
  const diff: number[] = array
    .sort((a, b) => a - b)
    .map((x) => Math.abs(x - n));
  const minDiff: number = Math.min(...diff);
  const closestNum: number | undefined = array.find(
    (x) => Math.abs(x - n) === minDiff
  );
  return closestNum ?? 0;
}

console.log(solution([3, 10, 28], 20)); //28
console.log(solution([10, 11, 12], 13)); //12
