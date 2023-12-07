/**
 * 문자열이 입력되면 그 단어의 가운데 문자를 출력
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 */

export {};

// function solution(s: string): string {
//   let mid:number = Math.floor(s.length / 2);
//   if (s.length % 2 === 0) {
//     return s[mid - 1] + s[mid];
//   } else {
//     return s[mid];
//   }
// }

function solution(s: string): string {
  let mid: number = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.substring(mid - 1, mid + 1);
  } else {
    return s.substring(mid, mid + 1);
  }
}

console.log(solution("study")); //u
console.log(solution("length")); //ng
console.log(solution("good")); //oo
