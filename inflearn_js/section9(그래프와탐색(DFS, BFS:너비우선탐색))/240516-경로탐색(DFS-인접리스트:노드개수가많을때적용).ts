/**
 * 경로 탐색(인접리스트)
 * 방향그래프가 주어지면 1번 정점에서 n번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성
 *
 * 인접 행렬은 정점개수가 많으면 메모리 낭비가 심하므로 인접리스트 방식으로 그래프를 표현하는 것이 일반적
 */
export {};

function solution(n: number, arr: number[][]) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array());
  const chk = Array.from({ length: n + 1 }, () => 0);
  const path: number[] = [];

  for (const [a, b] of arr) {
    //인접리스트
    //a행에 b를 push
    graph[a].push(b);
  }

  function DFS(v: number) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      //행 길이 끝까지
      for (let i = 0; i < graph[v].length; i++) {
        //graph[v][i] 정점 번호 : v정점에서 갈 수 있는 정점 번호
        if (chk[graph[v][i]] === 0) {
          chk[graph[v][i]] = 1;
          //경로에 현재 정점 추가
          path.push(graph[v][i]);
          //정점을 넘겨줘야 함
          DFS(graph[v][i]);
          chk[graph[v][i]] = 0;
          //경로에서 현재 정점 제거
          path.pop();
        }
      }
    }
  }
  //시작 정점인 1을 경로에 추가
  path.push(1);
  chk[1] = 1;
  DFS(1);
  return answer;
}

const input = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, input));
