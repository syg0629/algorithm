//https://www.acmicpc.net/problem/15829
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [n, str] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const mod = 1234567891;
let hash = 0;
let r = 1;
for (let i = 0; i < N; i++) {
  hash += (str.charCodeAt(i) - 96) * r;
  hash %= mod;
  r *= 31;
  r %= mod;
}
console.log(hash);
