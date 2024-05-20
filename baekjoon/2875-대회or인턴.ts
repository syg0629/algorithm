//https://www.acmicpc.net/problem/2875
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, m, k] = input;
let team = 0;

while (true) {
  if (n < 2 || m < 1 || n + k - 3 < k) break;
  team++;
  n -= 2;
  m--;
}
console.log(team);
