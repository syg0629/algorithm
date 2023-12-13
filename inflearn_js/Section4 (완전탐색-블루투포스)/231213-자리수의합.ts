/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
 * 그 합이 최대인 자연수를 출력
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 함
 * 만약 235와 1234가 동시에 답이면 1234를 답으로
 */
export {};

function solution(n: number, arr: number[]): number {
  let answer = 0;
  let max = 0;
  for (const x of arr) {
    let sum = String(x)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);

    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      answer = Math.max(answer, x);
    }
  }
  return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123])); //137
console.log(solution(7, [137, 460, 603, 40, 521, 128, 123])); //137
