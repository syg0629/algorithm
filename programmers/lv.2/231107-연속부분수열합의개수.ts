//https://school.programmers.co.kr/learn/courses/30/lessons/131701
export {};

function solution(elements: number[]): number {
  const sums: Set<number> = new Set();

  for (const i of elements.keys()) {
    let sum: number = 0;
    for (const j of elements.keys()) {
      sum += elements[(i + j) % elements.length];
      sums.add(sum);
    }
  }
  return sums.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
