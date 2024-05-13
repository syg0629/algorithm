const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const bfs = (graph: number[][], startNode: number) => {
  const visited: number[] = [];
  let needVisit: number[] = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift()!;
    if (!visited.includes(node)) {
      visited.push(node);
      const nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
    }
  }
  return visited;
};

const dfs = (graph: number[][], startNode: number) => {
  const visited: number[] = [];
  let needVisit: number[] = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.pop()!;
    if (!visited.includes(node)) {
      visited.push(node);
      const nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
    }
  }
  return visited;
};

const [n, edge, start]: number[] = input.shift()!.split(" ").map(Number);
const grph: number[][] = [...Array(n + 1)].map(() => []);

for (let i: number = 0; i < edge; i++) {
  const [from, to]: number[] = input[i].split(" ").map(Number);
  grph[from].push(to);
  grph[to].push(from);
}

console.log(dfs(grph, start).join(" "));
console.log(bfs(grph, start).join(" "));
