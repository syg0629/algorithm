//https://school.programmers.co.kr/learn/courses/30/lessons/1845
export {};

function solution(nums: number[]): number {
  const Dedup: Set<number> = new Set(nums);
  const DedupNum: number = Dedup.size;
  const Selectable: number = nums.length / 2;
  return DedupNum > Selectable ? Selectable : DedupNum;
}

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2
