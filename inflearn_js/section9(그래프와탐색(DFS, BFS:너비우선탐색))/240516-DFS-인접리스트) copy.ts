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
    graph[a].push(b);
  }

  function DFS(v: number) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (chk[graph[v][i]] === 0) {
          chk[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          chk[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }
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
