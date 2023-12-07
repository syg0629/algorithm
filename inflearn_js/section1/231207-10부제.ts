/**
 * 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제 위반 차량 대수를 출력
 */
export {};

function solution(day: number, arr: number[]): number {
  let count: number = 0;
  for (const x of arr) {
    if (day === x % 10) {
      count++;
    }
  }
  return count;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); //3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); //3
