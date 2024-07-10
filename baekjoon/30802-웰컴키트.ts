//https://www.acmicpc.net/problem/30802
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, size, [tShirt, pen]] = input.map((x: string) =>
  x.split(" ").map(Number)
);

let tShirtSum = 0;
for (const x of size) {
  tShirtSum += Math.ceil(x / tShirt);
}
console.log(tShirtSum);
console.log(`${Math.floor(n / pen)} ${n % pen}`);
