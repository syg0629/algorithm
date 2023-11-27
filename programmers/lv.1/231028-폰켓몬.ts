//https://school.programmers.co.kr/learn/courses/30/lessons/1845
export {};

function solution(nums: number[]): number {
  const dedup: Set<number> = new Set(nums);
  const dedupNum: number = dedup.size;
  const selectable: number = nums.length / 2;
  return dedupNum > selectable ? selectable : dedupNum;
}

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2
