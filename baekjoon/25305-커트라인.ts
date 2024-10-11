//https://www.acmicpc.net/problem/25305
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [info, grade] = fs.readFileSync(filePath).toString().trim().split("\n");
const [_, awardee] = info.split(" ");
const sortedGrade = grade
  .split(" ")
  .map((x: number) => Number(x))
  .sort((a: number, b: number) => b - a);
console.log(sortedGrade[awardee - 1]);
