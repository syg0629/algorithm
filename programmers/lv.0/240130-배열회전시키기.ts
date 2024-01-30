//https://school.programmers.co.kr/learn/courses/30/lessons/120844
export {};

function solution(numbers: number[], direction: string): number[] {
  if (direction === "right") {
    numbers.unshift(numbers.pop()!);
  } else {
    numbers.push(numbers.shift()!);
  }
  return numbers;
}

console.log(solution([1, 2, 3], "right")); //[3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")); //[455, 6, 4, -1, 45, 6, 4]
