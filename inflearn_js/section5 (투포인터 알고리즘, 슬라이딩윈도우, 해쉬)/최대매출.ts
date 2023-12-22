/**
 * 매출기록인 arr을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라
 */
export {};

// function solution(k: number, arr: number[]): number {
//   let sum: number = 0;
//   let answer: number = 0;

//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//     answer = sum;
//   }

//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     answer = Math.max(answer, sum);
//   }
//   return answer;
// }

function solution(k: number, arr: number[]): number {
  let sum: number = 0;
  let count: number = 0;
  let max: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count < k) {
      sum += arr[i];
      count++;
    } else {
      if (max < sum) {
        max = sum;
      }
      i = i - count;
      count = 0;
      sum = 0;
    }
  }
  return max;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); //56
