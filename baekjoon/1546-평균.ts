//https://www.acmicpc.net/problem/1546
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...scores] = input;
const score = [...scores].flatMap((x: string) => x.split(" ").map(Number));
const total = score.reduce((x, y) => x + y, 0);
console.log(((total / n / Math.max(...score)) * 100).toFixed(6));
