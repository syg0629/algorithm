//https://www.acmicpc.net/problem/2947
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const trees = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = 0; i < trees.length - 1; i++) {
  for (let j = 0; j < trees.length - i - 1; j++) {
    if (trees[j] > trees[j + 1]) {
      const temp = trees[j];
      trees[j] = trees[j + 1];
      trees[j + 1] = temp;
      console.log(trees.join(" "));
    }
  }
}
