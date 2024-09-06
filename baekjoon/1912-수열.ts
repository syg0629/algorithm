//https://www.acmicpc.net/problem/1912
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.split(" ").map(Number);
n = Number(n);

const answer = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  answer[i + 1] = Math.max(answer[i] + arr[i], arr[i]);
}
answer.shift();
console.log(Math.max(...answer));
