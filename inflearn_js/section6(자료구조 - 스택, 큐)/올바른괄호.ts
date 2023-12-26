/**
 * 올바른 괄호면 "YES" 아니면 "NO"를 출력
 */
export {};

function solution(s: string): string {
  let corBraJudg: number = 0;
  if (s.length % 2 !== 0) {
    return "NO";
  } else {
    for (const x of s) {
      if (x === "(") {
        corBraJudg++;
      } else {
        corBraJudg--;
      }
    }
  }
  return corBraJudg === 0 ? "YES" : "NO";
}

console.log(solution("(()(()))(()")); //NO
console.log(solution("(())()")); //YES
console.log(solution("(()()))")); //NO
