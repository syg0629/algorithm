//https://www.acmicpc.net/problem/2108
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input4.txt";
const [n, ...arr]: number[] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 산술평균
const avg: number = Math.round(arr.reduce((x, y) => x + y, 0) / n);
console.log(avg === -0 ? 0 : avg);

// 중앙값
arr.sort((a, b) => a - b);
console.log(arr[Math.floor(n / 2)]);

// 최빈값
const map = new Map();
for (const x of arr) {
  map.set(x, (map.get(x) ?? 0) + 1);
}

let maxCount = 0;
let mostFrequent = [];

for (const [k, v] of map) {
  if (v > maxCount) {
    maxCount = v;
    // 가장 많이 나온 숫자가 바뀌면 초기화
    mostFrequent = [k];
  } else if (v === maxCount) {
    // 가장 많이 나온 숫자와 같은 빈도라면 추가
    mostFrequent.push(k);
  }
}
console.log(mostFrequent.length === 1 ? mostFrequent[0] : mostFrequent[1]);

// 범위
console.log(Math.max(...arr) - Math.min(...arr));
