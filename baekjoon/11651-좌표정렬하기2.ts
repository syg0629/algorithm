//https://www.acmicpc.net/problem/11651
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const coordinate = input.map((x: string) => x.split(" ").map(Number));
coordinate.sort((a: number[], b: number[]) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
console.log(coordinate.map((x: number[]) => x.join(" ")).join("\n"));
