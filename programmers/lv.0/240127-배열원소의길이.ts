//https://school.programmers.co.kr/learn/courses/30/lessons/120854
export {};

function solution(strlist: string[]): number[] {
  const strlengths: number[] = strlist.map((x) => x.length);
  return strlengths;
}

console.log(solution(["We", "are", "the", "world!"])); //[2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])); //[1, 4, 12]
