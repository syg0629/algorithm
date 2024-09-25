//https://www.acmicpc.net/submit/15654
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [NM, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const sortedArr = arr
  .split(" ")
  .map(Number)
  .sort((a: number, b: number) => a - b);

const answer: number[] = [];
const recur = (start: number) => {
  if (start === M) {
    console.log(...answer);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (answer.includes(sortedArr[i])) continue;
    answer.push(sortedArr[i]);
    recur(start + 1);
    answer.pop();
  }
};
recur(0);
