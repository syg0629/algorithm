/**
 * 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램 작성
 * 단 재귀함수를 사용
 */
export {};

function solution(num: number): string {
  let answer = "";
  function dfs(num: number) {
    if (num === 0) {
    } else {
      dfs(Math.floor(num / 2));
      answer += num % 2;
    }
  }
  dfs(num);
  return answer;
}

console.log(solution(11)); // 1011
