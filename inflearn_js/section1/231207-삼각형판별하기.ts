/**
 * 삼각형 판별하기
 * 길이가 서로 다른 A, B, C 세개의 길이가 주어지고 삼각형을 만들 수 있으면 "YES" 아니면 "NO" 출력
 */
export {};

function solution(a: number, b: number, c: number): string {
  let answer: string = "YES";
  let max: number = 0;
  let sum: number = a + b + c;
  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;

  if (sum - max <= max) return (answer = "NO");
  else return answer;
}

console.log(solution(13, 33, 17)); //NO
console.log(solution(6, 7, 11)); //YES
