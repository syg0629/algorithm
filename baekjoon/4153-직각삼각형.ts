//https://www.acmicpc.net/problem/4153
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x: string) =>
    x
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );
input.pop();

for (const x of input) {
  const [a, b, c] = x;

  console.log(c * c === a * a + b * b ? "right" : "wrong");
}
