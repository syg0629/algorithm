//https://www.acmicpc.net/problem/2738
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);
const arr = input.map((x: string) => x.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  const result = [];
  for (let j = 0; j < m; j++) {
    result.push(arr[i][j] + arr[i + n][j]);
  }
  console.log(result.join(" "));
}
