//https://www.acmicpc.net/problem/10773
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [_, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];
for (const x of arr) {
  if (x !== 0) {
    stack.push(x);
  } else {
    stack.pop();
  }
}

console.log(stack.reduce((x, y) => x + y, 0));
