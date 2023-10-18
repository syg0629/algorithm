//https://school.programmers.co.kr/learn/courses/30/lessons/12914
export {};

function solution(n: number): number {
  const fNum: number[] = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    fNum.push((fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567));
  }
  return fNum[n];
}

console.log(solution(0)); //0
console.log(solution(1)); //1
console.log(solution(2)); //2
console.log(solution(3)); //3
console.log(solution(4)); //5
console.log(solution(5)); //8
