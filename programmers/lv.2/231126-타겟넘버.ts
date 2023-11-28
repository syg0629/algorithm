//https://school.programmers.co.kr/learn/courses/30/lessons/43165
export {};

function solution(numbers: number[], target: number): number {
  function findTargetCnt(idx: number, sum: number): number {
    if (idx === numbers.length) {
      return target === sum ? 1 : 0;
    }

    const add: number = findTargetCnt(idx + 1, sum + numbers[idx]);
    const subtract: number = findTargetCnt(idx + 1, sum - numbers[idx]);

    return add + subtract;
  }
  return findTargetCnt(0, 0);
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2
