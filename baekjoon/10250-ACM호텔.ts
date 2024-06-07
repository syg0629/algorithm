//https://www.acmicpc.net/problem/10250
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCase = input.slice(1).map((x: string) => x.split(" ").map(Number));

for (const x of testCase) {
  const [H, W, N] = x;
  const a = N % H === 0 ? H : N % H;
  const b = Math.ceil(N / H);

  console.log(a + (b < 10 ? "0" + b : b.toString()));
}
