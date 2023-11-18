// https://school.programmers.co.kr/learn/courses/30/lessons/12977
export {};

function solution(nums: number[]): number {
  let answer: number = 0;
  const offset = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + offset; j < nums.length; j++) {
      for (let e = j + offset; e < nums.length; e++) {
        if (isPrime(nums[i] + nums[j] + nums[e])) answer++;
      }
    }
  }
  return answer;
}

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(solution([1, 2, 3, 4])); //1
console.log(solution([1, 2, 7, 6, 4])); //4
