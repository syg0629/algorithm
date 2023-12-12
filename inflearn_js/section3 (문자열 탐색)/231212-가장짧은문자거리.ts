/**
 * 문자열 s, 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력
 */
export {};

function solution(s: string, t: string): number[] {
  let answer: number[] = [];
  let p: number = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

console.log(solution("teachermode", "e")); //[ 1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
