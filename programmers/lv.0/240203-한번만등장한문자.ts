//https://school.programmers.co.kr/learn/courses/30/lessons/120896
export {};

function solution(s: string): string {
  const letterCnt: Record<string, number> = {};
  for (const x of [...s]) {
    letterCnt[x] = letterCnt[x] ?? 0;
    letterCnt[x]++;
  }
  return Object.keys(letterCnt)
    .filter((x) => letterCnt[x] === 1)
    .sort()
    .join("");
}

console.log(solution("abcabcadc")); //"d"
console.log(solution("abdc")); //"abcd"
console.log(solution("hello")); //"eho"
