/**
 * N개의 수로 이루어진 수열
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램
 */
export {};

function solution(m: number, arr: number[]): number {
  let sum: number = 0;
  let count: number = 0;
  let p1: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === m) {
      count++;
    }
    while (sum >= m) {
      sum -= arr[p1++];
      if (sum === m) {
        count++;
      }
    }
  }
  return count;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2])); //3
