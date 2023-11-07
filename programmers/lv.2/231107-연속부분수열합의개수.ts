//https://school.programmers.co.kr/learn/courses/30/lessons/131701
export {};

function solution(elements: number[]): number {
  const circularSeq: number[] = [...elements, ...elements];
  const set = new Set();
  for (const i of elements.keys()) {
    let sum: number = 0;
    for (const j of elements.keys()) {
      sum += circularSeq[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
