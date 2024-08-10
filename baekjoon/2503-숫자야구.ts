//https://www.acmicpc.net/problem/2503
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((x: string) => x.split(" ").map(Number));

let answer = 0;
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    for (let e = 1; e < 10; e++) {
      if (i === j || j === e || i === e) {
        continue;
      }

      let cnt = 0;

      for (const [n, s, b] of input) {
        const digits = n.toString().split("").map(Number);

        let ballCount = 0;
        let strikeCount = 0;

        if (i === digits[0]) strikeCount++;
        if (j === digits[1]) strikeCount++;
        if (e === digits[2]) strikeCount++;

        if (i === digits[1] || i === digits[2]) ballCount++;
        if (j === digits[0] || j === digits[2]) ballCount++;
        if (e === digits[0] || e === digits[1]) ballCount++;

        if (b === ballCount && s === strikeCount) {
          cnt++;
        }
      }
      if (cnt === input.length) {
        answer++;
      }
    }
  }
}

console.log(answer);
