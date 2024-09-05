//https://www.acmicpc.net/problem/2559
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [date, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [period, day] = date.split(" ").map(Number);
const temperature = arr.split(" ").map(Number);

const prefix = new Array(period + 1).fill(0);
for (let i = 0; i < period; i++) {
  prefix[i + 1] = prefix[i] + temperature[i];
}

const answer = [];
for (let i = day; i <= period; i++) {
  answer.push(prefix[i] - prefix[i - day]);
}
console.log(Math.max(...answer));
