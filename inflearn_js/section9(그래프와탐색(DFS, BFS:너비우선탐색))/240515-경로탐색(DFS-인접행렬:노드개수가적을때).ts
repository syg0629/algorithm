/**
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력
 */
export {};

function solution(n: number, arr: number[][]) {
  let answer = 0;
  // 2차원 배열을 만들 graph
  // 1번 인덱스부터 사용할거라 n+1
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  // 방문 여부 확인
  const ch = Array.from({ length: n + 1 }, () => 0);
  // 경로 확인을 위한
  const path: number[] = [];

  for (const [a, b] of arr) {
    // 방향 그래프이기에 a -> b로 이동
    // 무방향 그래프면 [b][a] = 1
    // 가중치 그래프면 [a][b] = c
    graph[a][b] = 1;
  }

  function DFS(v: number) {
    // 종착점에 오면 ++
    if (v === n) {
      answer++;
      console.log(path);
    }

    // 그렇지 않으면 N개의 종점 개수 만큼 가지를 뻗어야 함
    else {
      // 정점번호 1번부터 임
      for (let i = 1; i <= n; i++) {
        //v에서 i까지 갈 수 있는지 && 이미 방문한게 아닌지 확인
        if (graph[v][i] === 1 && ch[i] === 0) {
          // 방문했음
          ch[i] = 1;
          path.push(i);
          // i정점으로 넘어감
          DFS(i);
          // 돌아왔으니 아래 행동들 돌려주기
          // 방문여부 풀어주기
          ch[i] = 0;
          // path에서도 제외시키기
          path.pop();
        }
      }
    }
  }
  path.push(1);
  // 1은 이미 방문했다고 해줘야 DFS에서 돌 때 중복이 일어나지 않음
  // 이 실수 많이 일어나니까 주의!!!
  // 1은 방문했다고 체크해주고
  ch[1] = 1;
  // DFS가 돌아야함
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
