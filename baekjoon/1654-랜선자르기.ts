// https://www.acmicpc.net/problem/1654
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, l] = input.shift().split(" ").map(Number);
const lans = input.map(Number);

function solution(l: number, lans: number[]) {
  const sorted = lans.sort((x, y) => x - y);
  let start = 1;
  let end = Math.max(...sorted);
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const max = sorted.reduce((x, y) => x + Math.floor(y / mid), 0);
    if (max >= l) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
}
console.log(solution(l, lans)); // 200
