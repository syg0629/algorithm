/**
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성
 */
export {};

function solution(num: number) {
  function dfs(num: number) {
    if (num === 0) {
    } else {
      dfs(num - 1);
      console.log(num);
    }
  }
  dfs(num);
}

console.log(solution(3)); //1 2 3
