//https://school.programmers.co.kr/learn/courses/30/lessons/42587
export {};

function solution(priorities: number[], location: number): number {
  const queue: [number, number][] = priorities.map((priority, idx) => [
    idx,
    priority,
  ]);
  let maxPriority: number = Math.max(...priorities);
  let count: number = 0;

  while (queue.length > 0) {
    const [idx, priority] = queue.shift()!;
    if (priority < maxPriority) {
      queue.push([idx, priority]);
    } else {
      count++;
      maxPriority = Math.max(...queue.map(([_, x]) => x));
      if (idx === location) {
        return count;
      }
    }
  }

  return count;
}

console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
