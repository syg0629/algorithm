//https://www.acmicpc.net/problem/11050
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let Nsum = 1;
let Ksum = 1;
for (let i = N; i > N - K; i--) {
  Nsum *= i;
}
for (let i = K; i > 1; i--) {
  Ksum *= i;
}

console.log(Nsum / Ksum);
