//https://school.programmers.co.kr/learn/courses/30/lessons/120903
export {};

function solution(s1: string[], s2: string[]): number {
  const combinedStrs: string[] = [...s1, ...s2];
  const set: Set<string> = new Set(combinedStrs);
  return combinedStrs.length - set.size;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); //2
console.log(solution(["n", "omg"], ["m", "dot"])); //0
