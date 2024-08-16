//https://www.acmicpc.net/problem/14232
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

const arr = [];
let limit = Math.sqrt(input);

for (let i = 2; i <= limit; i++) {
  while (input % i === 0) {
    arr.push(i);
    input /= i;
  }
  limit = Math.sqrt(input);
}

if (input > 1) {
  arr.push(input);
}

console.log(arr.length);
console.log(arr.join(" "));
