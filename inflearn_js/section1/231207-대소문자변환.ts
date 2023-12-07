/**
 * 대소문자 변환
 * 대문자는 소문자로 소문자는 대문자로 변환하여 출력
 */
export {};

function solution(s: string): string {
  let answer: string = "";
  for (const x of s) {
    answer += x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
  }
  return answer;
}

console.log(solution("StuDY")); //sTUdy
