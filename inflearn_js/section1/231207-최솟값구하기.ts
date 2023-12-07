/**
 * 주어진 숫자 중 가장 작은 수를 출력
 */
export {};

// function solution(arr: number[]): number {
//   return Math.min.apply(null, arr);
// }

function solution(arr: number[]): number {
  return Math.min(...arr);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); //2
console.log(solution([5, 7, 1, 3, 2, 9, 11])); //1
