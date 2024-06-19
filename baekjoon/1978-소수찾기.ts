//https://www.acmicpc.net/problem/1978
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [_, ...nArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x: string) => x.split(" ").map(Number))
  .flat();

const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let count = 0;
for (const x of nArr) {
  if (isPrime(x)) count++;
}

console.log(count);
