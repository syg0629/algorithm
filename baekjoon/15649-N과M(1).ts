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

const recur = (number: number, output: string) => {
  if (number === M) {
    console.log(output);
    return;
  }

  for (let i = 1; i <= N; i++) {
    recur(number + 1, output + i + " ");
  }
};

recur(0, "");
