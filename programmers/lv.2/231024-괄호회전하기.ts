//https://school.programmers.co.kr/learn/courses/30/lessons/76502
export {};

function solution(s: string): number {
  if (s.length % 2 !== 0) return 0;

  const corBracket: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];
  let count: number = 0;

  for (const [index] of s.split("").entries()) {
    let isValid: boolean = true;
    const rotated: string = s.slice(index) + s.slice(0, index);
    for (const x of rotated) {
      if (x === "(" || x === "{" || x === "[") {
        stack.push(x);
      } else {
        const lastBracket: string | undefined = stack.pop();
        if (lastBracket === undefined || corBracket[lastBracket] !== x) {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) count++;
  }
  return count;
}

console.log(solution("[](){}")); //3
console.log(solution("}]()[{")); //2
console.log(solution("[)(]")); //0
console.log(solution("}}}")); //0
