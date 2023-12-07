/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력
 * 출력하는 문자열은 원래의 입력순서를 유지
 */

// function solution(s: string[]): string[] {
//   let dup: string[] = [];
//   for (const x of s) {
//     if (!dup.includes(x)) {
//       dup.push(x);
//     }
//   }
//   return dup;
// }

function solution(s: string[]): string[] {
  return s.filter((x, i) => s.indexOf(x) === i);
}

console.log(solution(["good", "time", "good", "time", "student"])); //[ 'good', 'time', 'student' ]
