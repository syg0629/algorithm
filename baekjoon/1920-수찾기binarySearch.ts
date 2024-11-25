//https://www.acmicpc.net/problem/1920
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[1]
  .split(" ")
  .map(Number)
  .sort((a: number, b: number) => a - b);
const M = input[3].split(" ").map(Number);

const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};

const result = M.map((x: number) => (binarySearch(N, x) ? 1 : 0));
console.log(result.join("\n"));
