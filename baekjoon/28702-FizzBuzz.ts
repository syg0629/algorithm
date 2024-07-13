//https://www.acmicpc.net/problem/28702
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = 0;
for (const [i, v] of input.entries()) {
  const numericValue = Number(v);
  if (!isNaN(numericValue) && n < numericValue) {
    n = numericValue;
    if (i === 0) {
      n += 3;
      break;
    } else if (i === 1) {
      n += 2;
      break;
    } else {
      n++;
    }
  }
}

n % 3 === 0 && n % 5 === 0
  ? console.log("FizzBuzz")
  : n % 3 === 0
    ? console.log("Fizz")
    : n % 5 === 0
      ? console.log("Buzz")
      : console.log(n);
