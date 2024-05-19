/**
 * 이진트리 순회(깊이우선탐색)
 * 이진트리의 전위, 중위, 후위 순회를 연습해라
 */
export {};

function solution(v: number) {
  let answer;
  function DFS(v: number) {
    if (v > 7) return;
    else {
      //전위순회 출력
      // console.log(v);

      //부모의 왼쪽 자식
      DFS(v * 2);

      //중위순회 출력
      console.log(v);

      //부모의 오른쪽 자식
      DFS(v * 2 + 1);

      //후위순회 출력
      // console.log(v);
    }
  }
  DFS(v);
}

console.log(solution(1));
