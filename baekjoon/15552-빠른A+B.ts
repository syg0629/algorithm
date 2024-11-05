//https://www.acmicpc.net/problem/15552
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const numberArr = arr.map((x: string) => x.split(" ").map(Number));
const sum: number[] = [];
for (let i = 0; i < numberArr.length; i++) {
  sum.push(numberArr[i][0] + numberArr[i][1]);
}
console.log(sum.join("\n"));
