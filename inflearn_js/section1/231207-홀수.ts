/**
 * 주어진 값에서 홀수를 모두 골라 그 합을 더하고, 고른 홀수들 중 최솟값을 찾는 프로그램
 */
export {};

function solution(arr: number[]): number[] {
  const answer: number[] = [];
  const odd: number[] = [];
  for (const x of arr) {
    if (x % 2 !== 0) {
      odd.push(x);
    }
  }
  answer.push(odd.reduce((x, y) => x + y));
  answer.push(Math.min(...odd));
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85])); //[ 256, 41 ]
