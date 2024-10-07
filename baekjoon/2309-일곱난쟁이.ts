//https://www.acmicpc.net/problem/2309
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x: string) => Number(x))
  .sort((a: number, b: number) => a - b);
const dwarfsSum = input.reduce((a: number, b: number) => a + b, 0);
let flag = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (dwarfsSum - (input[i] + input[j]) === 100) {
      input.splice(j, 1);
      input.splice(i, 1);
      flag = 1;
      break;
    }
  }
  if (flag === 1) break;
}

console.log(input.join("\n"));
