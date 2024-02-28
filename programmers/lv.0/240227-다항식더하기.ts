//https://school.programmers.co.kr/learn/courses/30/lessons/120863
export {};

function solution(polynomial: string): string {
  let xTermsSum: number = 0;
  let constantTermsSum: number = 0;
  const terms: string[] = polynomial.split(" + ");
  for (const x of terms) {
    if (x.includes("x")) {
      let xTermsNum: string = x.replace("x", "") || "1";
      xTermsSum += Number(xTermsNum);
    } else {
      constantTermsSum += Number(x);
    }
  }
  const answer: string[] = [];
  if (xTermsSum) answer.push(`${xTermsSum === 1 ? "" : xTermsSum}x`);
  if (constantTermsSum) answer.push(constantTermsSum.toString());
  return answer.join(" + ");
}

console.log(solution("3x + 7 + x")); //"4x + 7"
console.log(solution("x + x + x")); //"3x"
console.log(solution("x + 1")); //"3x"
