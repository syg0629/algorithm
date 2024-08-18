//https://www.acmicpc.net/problem/11653
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

const arr = [];
let n = 2;
while (n <= input) {
  while (input % n === 0) {
    arr.push(n);
    input /= n;
  }
  n++;
}
console.log(arr.join("\n"));
