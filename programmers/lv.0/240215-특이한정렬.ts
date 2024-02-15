//https://school.programmers.co.kr/learn/courses/30/lessons/120880
export {};

function solution(numlist: number[], n: number): number[] {
  const nearestNums: number[][] = [];
  for (const x of numlist) {
    nearestNums.push([x, Math.abs(n - x)]);
  }
  nearestNums.sort((a: number[], b: number[]) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });
  const answer = nearestNums.map((x: number[]) => x[0]);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); //[4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); //[36, 40, 20, 47, 10, 6, 7000, 10000]
