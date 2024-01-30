//https://school.programmers.co.kr/learn/courses/30/lessons/120825
export {};

function solution(my_string: string, n: number): string {
  const repeatedStrs: string[] = [...my_string].map((x) => x.repeat(n));
  return repeatedStrs.join("");
}

console.log(solution("hello", 3)); //"hhheeellllllooo"
