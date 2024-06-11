//https://www.acmicpc.net/problem/1259
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

for (const x of input) {
  if (x === x.split("").reverse().join("")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
