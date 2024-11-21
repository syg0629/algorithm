//https://www.acmicpc.net/problem/10815
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[1].split(" ").map(Number);
const M = input[3].split(" ").map(Number);

const map = new Map();
for (const x of N) {
  map.set(x, false);
}

const answer = M.map((x: number) => (map.has(x) ? 1 : 0));
console.log(answer.join(" "));
