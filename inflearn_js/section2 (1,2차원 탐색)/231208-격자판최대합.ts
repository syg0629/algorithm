/**
 *  N*N 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력
 */
export {};

function solution(arr: number[][]): number {
  let answer: number = 0;
  let sum1: number = 0;
  let sum2: number = 0;

  //행, 열
  for (let i = 0; i < arr.length; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(sum1, sum2, answer);
  }

  //대각선
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - i - 1];
  }
  answer = Math.max(sum1, sum2, answer);
  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); //155
