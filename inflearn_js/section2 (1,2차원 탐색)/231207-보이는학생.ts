/*
 * 선생님이 N(1 <= N <= 1000)명의 학생을 일렬로 세움
 * 맨 앞에 서 있는 선생님이 볼 수 있는 최대 학생의 수를 구하는 프로그램
 * (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
 */
export {};

function solution(arr: number[]): number {
  let max: number = 0;
  let count: number = 0;
  for (const x of arr) {
    if (max < x) {
      count++;
      max = x;
    }
  }
  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])); //5
