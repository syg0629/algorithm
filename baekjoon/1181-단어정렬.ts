//https://www.acmicpc.net/problem/1181
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.slice(1);
str.sort((a: string, b: string) => a.length - b.length || a.localeCompare(b));
const set = new Set(str);
for (const x of set) {
  console.log(x);
}
