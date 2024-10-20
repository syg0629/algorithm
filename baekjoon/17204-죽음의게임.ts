//https://www.acmicpc.net/problem/17204
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, bosung] = info.split(" ").map(Number);
const arr = input.map(Number);
const visited = new Array(n).fill(false);
let current = 0;
let count = 0;

while (!visited[current]) {
  visited[current] = true;
  count++;

  if (current === bosung) {
    console.log(count - 1);
    process.exit(0);
  }
  current = arr[current];
}
console.log(-1);
