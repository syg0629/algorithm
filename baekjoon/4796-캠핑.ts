//https://www.acmicpc.net/problem/4796
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input: string[] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [l, p, v] = input[i].split(" ").map(Number);

  const quotient = Math.floor(v / p);
  const remainder = v % p;
  const result = quotient * l + Math.min(remainder, l);

  console.log(`Case ${i + 1}: ${result}`);
}
