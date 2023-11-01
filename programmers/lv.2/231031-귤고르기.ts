//school.programmers.co.kr/learn/courses/30/lessons/138476
export {};

function solution(k: number, tangerine: number[]): number {
  const typeNum: Record<string, number> = {};

  for (const x of tangerine) {
    typeNum[x] = typeNum[x] ?? 0;
    typeNum[x]++;
  }
  const sortedNum: number[] = Object.values(typeNum).sort(
    (a: number, b: number) => b - a
  );

  let sum: number = 0;
  for (const [i, v] of sortedNum.entries()) {
    sum += v;
    if (sum >= k) return i + 1;
  }
  return 0;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); //3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); //2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); //1
