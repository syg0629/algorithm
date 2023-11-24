// https://school.programmers.co.kr/learn/courses/30/lessons/12977
/**
주어진 숫자 중 N개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums, 더하는 숫자의 개수 N이 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 N개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.(스택으로 풀기)
 */
export {};

function solution(nums: number[], N: number): number {
  let answer: number = 0;
  const stack: number[] = [];
  let idx: number = 0;

  while (true) {
    if (stack.length === N) {
      const sum: number = stack.reduce(
        (x: number, i: number) => x + nums[i],
        0
      );
      if (isPrime(sum)) answer++;
    }

    if (idx === nums.length && stack.length === 0) {
      break;
    }

    if (idx < nums.length) {
      stack.push(idx);
    } else {
      const popedItem: number | undefined = stack.pop();
      if (popedItem !== undefined) {
        idx = popedItem;
      }
    }
    idx++;
  }
  return answer;
}

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(solution([1, 2, 3, 4], 3)); //1
console.log(solution([1, 2, 7, 6, 4], 3)); //4
