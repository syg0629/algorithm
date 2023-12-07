/**
 * 세 수 중 최솟값
 * 100 이하의 자연수 A, B, C를 입력받아 가장 작은 값 출력
 * 정렬 사용 X
 */
export {};

// function solution(a: number, b: number, c: number): number {
//   return Math.min(a, b, c);
// }

function solution(a: number, b: number, c: number): number {
  let answer: number = 0;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11)); //5
