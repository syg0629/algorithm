//https://www.acmicpc.net/problem/1676
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;
for (let i = 5; i <= input; i *= 5) {
  count += Math.floor(input / i);
}
console.log(count);
