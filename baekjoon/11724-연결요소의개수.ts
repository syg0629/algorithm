//https://www.acmicpc.net/problem/11724
export {};

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input2.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 입력 데이터 처리
const inputs: number[][] = input
  .slice()
  .map((x: string) => x.split(' ').map(Number));
const [n, m]: number[] = inputs.shift()!;

let answer: number = 0;
const visited: boolean[] = Array(n + 1).fill(false);
const graph: number[][] = Array.from({ length: n + 1 }, () => []);

// 양방향(무방향) 그래프 만들기
for (const [from, to] of inputs) {
  graph[from].push(to);
  graph[to].push(from);
}

const dfs = (start: number) => {
  visited[start] = true;
  for (const next of graph[start]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

// 연결된 컴포넌트 수 세기
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    // 새로운 연결된 컴포넌트를 발견할 때마다 카운트 증가
    answer++;
  }
}

console.log(answer);
