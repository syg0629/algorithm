/**
 * 알파벳 대문자 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기
 * 단 반복 횟수가 1인 경우 생략
 */
export {};

function solution(s: string): string {
  let answer: string = "";
  let count: number = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      if (count > 1) {
        answer += count;
        count = 1;
      }
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSSEE")); //K2HS7E2
