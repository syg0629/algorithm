//https://school.programmers.co.kr/learn/courses/30/lessons/120826
export {};

function solution(my_string: string, letter: string): string {
  return [...my_string].filter((x) => x !== letter).join("");
}

console.log(solution("abcdef", "f")); //"abcde"
console.log(solution("BCBdbe", "B")); //"Cdbe"
