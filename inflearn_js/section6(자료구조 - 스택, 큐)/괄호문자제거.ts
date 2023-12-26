/**
 * 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력
 */
export {};

function solution(s: string): string {
  let chkBraLen: number = 0;
  let remainder: string = "";
  for (const x of s) {
    if (x === "(") {
      chkBraLen++;
    } else if (x === ")") {
      chkBraLen--;
    }
    if (x !== ")" && chkBraLen === 0) {
      remainder += x;
    }
  }
  return remainder;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")); //EFLM
