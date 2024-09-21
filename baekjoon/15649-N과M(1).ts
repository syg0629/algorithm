//https://www.acmicpc.net/problem/15649
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
const recur = (number: number) => {
  if (number === M) {
    console.log(...answer);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (answer.includes(i)) continue;
    answer.push(i);
    recur(number + 1);
    answer.pop();
  }
};

recur(0);
