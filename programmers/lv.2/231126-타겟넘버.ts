//https://school.programmers.co.kr/learn/courses/30/lessons/43165
export {};

function solution(numbers: number[], target: number): number {
  function countTargetSum(currentNumbers: number[], sum: number): number {
    if (currentNumbers.length === 0) {
      return target === sum ? 1 : 0;
    }

    const [first, ...rest] = currentNumbers;
    const add: number = countTargetSum(rest, sum + first);
    const subtract: number = countTargetSum(rest, sum - first);

    return add + subtract;
  }
  return countTargetSum(numbers, 0);
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2
