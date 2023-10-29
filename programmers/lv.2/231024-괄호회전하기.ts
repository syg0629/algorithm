//https://school.programmers.co.kr/learn/courses/30/lessons/76502
export {};

function solution(s: string): number {
  if (s.length % 2 !== 0) return 0;

  let count: number = 0;

  for (const i of s.split("").keys()) {
    const rotated: string = s.slice(i) + s.slice(0, i);
    if (validCorBracket(rotated)) {
      count++;
    }
  }
  return count;
}

function validCorBracket(rotated: string): boolean {
  const corBracket: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];

  for (const x of rotated) {
    if (x === "(" || x === "{" || x === "[") {
      stack.push(x);
    } else {
      const lastBracket: string | undefined = stack.pop();
      if (lastBracket === undefined || corBracket[lastBracket] !== x) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution("[](){}")); //3
console.log(solution("}]()[{")); //2
console.log(solution("[)(]")); //0
console.log(solution("}}}")); //0
