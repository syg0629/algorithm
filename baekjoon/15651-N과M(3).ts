//https://www.acmicpc.net/problem/15651
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const line: number[] = [];
let answer = "";

const recur = (len: number) => {
  if (len === M) {
    answer += line.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    line.push(i);
    recur(len + 1);
    line.pop();
  }
};

recur(0);
console.log(answer);
