/**
 * 중복된 문자를 제거하고 출력
 */

// function solution(s: string): string {
//   const word: string[] = [];
//   for (const x of s) {
//     if (!word.includes(x)) {
//       word.push(x);
//     }
//   }
//   return word.join("");
// }

function solution(s: string): string {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
  return answer;
}
console.log(solution("ksekkset")); //"kset"
