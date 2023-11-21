// https://school.programmers.co.kr/learn/courses/30/lessons/12977
export {};

function solution(nums: number[], numCnt: number): number {
  let answer: number = 0;

  function findConbinations(idx: number, com: number[], numCnt: number) {
    if (com.length === numCnt) {
      const sum = com.reduce((x: number, y: number) => x + y, 0);
      if (isPrime(sum)) answer++;
      return;
    } else {
      for (let i = idx; i < nums.length; i++) {
        com.push(nums[i]);
        findConbinations(i + 1, com, numCnt);
        com.pop();
      }
    }
  }
  findConbinations(0, [], numCnt);
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
