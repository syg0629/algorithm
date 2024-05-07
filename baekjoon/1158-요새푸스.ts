const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;

function solution(n: number, k: number) {
  const answer = [];
  const arr = new Array(n).fill(0).map((_, i) => i + 1);
  let count = 1;
  while (arr.length) {
    const removedNum = arr.shift()!;
    if (count % k === 0) {
      answer.push(removedNum);
    } else {
      arr.push(removedNum);
    }
    count++;
  }
  console.log(`<${answer.join(", ")}>`);
}

solution(n, k);

//3, 6, 2, 7, 5, 1, 4
