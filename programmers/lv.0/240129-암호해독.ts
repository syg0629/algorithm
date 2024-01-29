//https://school.programmers.co.kr/learn/courses/30/lessons/120892
export {};

function solution(cipher: string, code: number): string {
  return [...cipher].filter((_, i) => (i + 1) % code === 0).join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); //"attack"
console.log(solution("pfqallllabwaoclk", 2)); //"fallback"
