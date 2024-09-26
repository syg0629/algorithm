//https://www.acmicpc.net/problem/15655
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const [NM, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const sortedArr = arr
  .split(" ")
  .map(Number)
  .sort((a: number, b: number) => a - b);

const answer: number[] = [];
const recur = (start: number) => {
  if (answer.length === M) {
    console.log(...answer);
  }

  for (let i = start; i < N; i++) {
    answer.push(sortedArr[i]);
    recur(i + 1);
    answer.pop();
  }
};
recur(0);
