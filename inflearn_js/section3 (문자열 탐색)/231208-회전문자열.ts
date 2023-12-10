/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열
 * 해당 문자열이 회문 문자열이면 "YES", 아니면 "NO"를 출력
 */
export {};

// function solution(s: string): string {
//   return s.toUpperCase() === s.toUpperCase().split("").reverse().join("")
//     ? "YES"
//     : "NO";
// }

function solution(s: string): string {
  const upperCase: string = s.toUpperCase();
  const sLength: number = s.length;
  for (let i = 0; i < Math.floor(sLength / 2); i++) {
    if (upperCase[i] === upperCase[sLength - i - 1]) {
      return "YES";
    }
  }
  return "NO";
}

console.log(solution("goooG"));
