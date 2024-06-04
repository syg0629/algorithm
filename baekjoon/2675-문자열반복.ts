//https://www.acmicpc.net/problem/2577
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (const x of input.slice(1)) {
  const [n, str] = x.split(" ");
  let answer = "";
  for (const y of str) {
    for (let i = 0; i < n; i++) {
      answer += y;
    }
  }
  console.log(answer);
}
