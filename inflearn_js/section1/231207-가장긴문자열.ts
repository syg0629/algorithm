/**
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력
 */
export {};

function solution(s: string[]): string {
  let long: string = "";
  for (const x of s) {
    if (long.length < x.length) {
      long = x;
    }
  }
  return long;
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"])); //beautiful
