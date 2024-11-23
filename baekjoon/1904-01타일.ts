//https://www.acmicpc.net/problem/1904
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = Number(fs.readFileSync(filePath));
const arr = [0, 1, 2];

if (input <= 2) {
  console.log(arr[input]);
} else {
  for (let i = 3; i <= input; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
  }
  console.log(arr[input]);
}
