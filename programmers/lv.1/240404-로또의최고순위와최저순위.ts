//https://school.programmers.co.kr/learn/courses/30/lessons/77484
export {};

function solution(lottos: number[], win_nums: number[]): number[] {
  const ranks: Record<number, number> = {
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };
  const zeroCount: number = lottos.filter((x) => x === 0).length;
  const correctCount: number = lottos.filter((x) =>
    win_nums.includes(x)
  ).length;
  const totalCount: number = zeroCount + correctCount;
  return [ranks[totalCount] ?? 6, ranks[correctCount] ?? 6];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //[3,5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1,6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); //[1,1]
