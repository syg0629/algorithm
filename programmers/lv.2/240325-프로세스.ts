//https://school.programmers.co.kr/learn/courses/30/lessons/42587
export {};

function solution(priorities: number[], location: number): number {
  let count: number = 0;
  let maxPriority: number = Math.max(...priorities);

  while (true) {
    const curProcess: number = priorities.shift()!;

    if (curProcess === maxPriority) {
      count++;
      if (location === 0) return count;
      maxPriority = Math.max(...priorities);
    } else {
      priorities.push(curProcess);
    }

    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}

console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
