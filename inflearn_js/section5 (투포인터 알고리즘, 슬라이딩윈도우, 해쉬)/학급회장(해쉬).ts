/**
 * 학급회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록
 * 투표용지에 후보의 알파벳이 쓰여있으며 선생님이 발표
 * 어떤 알파벳 후보가 학급 회장이 되었는지 출력
 * 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정
 */
export {};

function solution(s: string): string {
  const m: Map<string, number> = new Map();
  for (const x of s) {
    if (m.has(x)) {
      const currentCnt: number | undefined = m.get(x);
      if (currentCnt !== undefined) {
        m.set(x, currentCnt + 1);
      }
    } else {
      m.set(x, 1);
    }
  }
  let max: number = 0;
  let answer: string = "";
  for (const [key, value] of m) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE")); //C
