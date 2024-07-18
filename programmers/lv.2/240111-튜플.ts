//https://school.programmers.co.kr/learn/courses/30/lessons/64065
export {};

function solution(s: string): number[] {
  const extractedNums: number[] = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((x) => x.split(",").map((x) => Number(x)))
    .sort((x, y) => x.length - y.length)
    .flat();
  const removeDuplicates: Set<number> = new Set(extractedNums);
  const uniqueNums: number[] = Array.from(removeDuplicates);
  return uniqueNums;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); //[2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); //[2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); //[111, 20]
console.log(solution("{{123}}")); //[123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); //[3, 2, 4, 1]
