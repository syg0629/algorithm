//https://school.programmers.co.kr/learn/courses/30/lessons/12945
export {};

function solution(n: number): number {
  const fNum: number[] = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567;
  }
  return fNum[n];
}

console.log(solution(2)); //1
console.log(solution(3)); //2
console.log(solution(4)); //3
console.log(solution(5)); //5
console.log(solution(6)); //8
console.log(solution(7)); //13
