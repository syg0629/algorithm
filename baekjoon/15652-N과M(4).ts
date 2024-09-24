//https://www.acmicpc.net/problem/15652
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer: number[] = [];
const recur = (curNum: number, start: number) => {
  if (curNum === M) {
    console.log(...answer);
    return;
  }
  for (let i = start; i <= N; i++) {
    answer.push(i);
    recur(curNum + 1, i);
    answer.pop();
  }
};
recur(0, 1);
