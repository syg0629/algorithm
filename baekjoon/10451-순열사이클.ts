//https://www.acmicpc.net/problem/10451
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;

for (let i = 0; i < n; i++) {
  const num = Number(input[idx++]);
  const arr = [0, ...input[idx++].split(" ").map(Number)];

  const visited = new Array(num + 1).fill(false);
  let count = 0;

  const DFS = (node: number) => {
    visited[node] = true;
    if (!visited[arr[node]]) {
      DFS(arr[node]);
    }
  };

  for (let i = 1; i <= num; i++) {
    if (!visited[i]) {
      DFS(i);
      count++;
    }
  }

  console.log(count);
}
