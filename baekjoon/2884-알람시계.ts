//https://www.acmicpc.net/problem/2884
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [hour, minute] = input;
minute -= 45;

if (minute < 0) {
  if (hour === 0) {
    hour = 24;
  }
  hour--;
  minute += 60;
}
console.log(hour, minute);
