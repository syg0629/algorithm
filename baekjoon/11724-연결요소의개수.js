//https://www.acmicpc.net/problem/11724
// export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputs = input.slice().map((x) => x.split(" ").map(Number));
const [n, m] = inputs.shift();

let answer = 0;
const visited = Array(n + 1).fill(false);
const graph = Array.from({ length: n + 1 }, () => []);

// 양방향(무방향) 그래프로 만들기
inputs.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function dfs(start) {
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}
console.log(answer); //2
