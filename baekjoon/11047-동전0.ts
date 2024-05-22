//https://www.acmicpc.net/problem/11047
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input: string[] = fs.readFileSync(filePath).toString().trim().split("\n");

let target = input[0].split(" ").map(Number).pop()!;
const money = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);
let minCoins = 0;

for (const x of money) {
  if (target < x) continue;

  const quantity = Math.floor(target / x);
  minCoins += quantity;
  target -= quantity * x;
}
console.log(minCoins); //6
