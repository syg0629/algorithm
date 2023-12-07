/**
 * 입력된 단어에 A를 모두 #으로 바꾸어 출력
 */
export {};

// function solution(s: string): string {
//   return s.replaceAll("A", "#");
// }

function solution(s: string): string {
  let answer: string = "";
  for (const x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

console.log(solution("BANANA")); //"B#N#N#"
