//https://www.acmicpc.net/problem/2292
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath);

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;
  range++;
}
console.log(range);
