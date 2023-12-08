/**
 * 여러 개의 OX문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우 가산점
 * 1번 문제가 맞는 경우 1점으로 계산
 * 앞 문제 틀리다가 답이 맞는 처음 문제는 1점으로 계산
 * 연속적으로 답이 맞는 경우 두 번째 문제 2점, 세 번째 문제 3점, ...K번째 문제는 K점으로 계산
 * 틀린 문제는 0점
 *
 * 답이 맞는 문제의 경우 1로 표시, 틀린 경우에는 0으로 표시
 */
export {};

function solution(arr: number[]): number {
  let sum: number = 0;
  let count: number = 0;
  for (const x of arr) {
    if (x === 1) {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  }
  return sum;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); //10
