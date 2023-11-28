// https://school.programmers.co.kr/learn/courses/30/lessons/176963
export {};

function solution(
  name: string[],
  yearning: number[],
  photo: string[][]
): number[] {
  const memoriesScore: Record<string, number> = {};

  for (const i of name.keys()) {
    memoriesScore[name[i]] = yearning[i];
  }

  const phoneScore: number[] = photo.map((x) =>
    x.reduce((a: number, b: string) => a + (memoriesScore[b] ?? 0), 0)
  );
  return phoneScore;
}

// prettier-ignore
console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3]	, [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])) //[19, 15, 6]
// prettier-ignore
console.log(solution(["kali", "mari", "don"], [11, 1, 55],	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]])) //[67, 0, 55]
// prettier-ignore
console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3]	, [["may"],["kein", "deny", "may"], ["kon", "coni"]])) //[5, 15, 0]
