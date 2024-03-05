//https://school.programmers.co.kr/learn/courses/30/lessons/120863
export {};

function solution(polynomial: string): string {
  let xTermsSum: number = 0;
  let constantTermsSum: number = 0;
  const terms: string[] = polynomial.split(" + ");
  for (const x of terms) {
    if (x.includes("x")) {
      let xTermsNum: number = Number(x.split("x")[0]) || 1;
      xTermsSum += xTermsNum;
    } else {
      constantTermsSum += Number(x);
    }
  }
  let answer: string = "";
  if (xTermsSum) answer += `${xTermsSum === 1 ? "" : xTermsSum}x`;
  if (constantTermsSum)
    answer += (xTermsSum ? " + " : "") + constantTermsSum.toString();
  return answer;
}

console.log(solution("3x + 7 + x")); //"4x + 7"
console.log(solution("x + x + x")); //"3x"
console.log(solution("x + 1")); //"x+1"
