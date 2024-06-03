//https://www.acmicpc.net/problem/1157
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input0.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");
const upperStr = input.map((x: string) => x.toUpperCase());

const map = new Map();
for (const x of upperStr) {
  map.set(x, (map.get(x) ?? 0) + 1);
}

const max = Math.max(...map.values());

const findWord = () => {
  let count = 0;
  let answer = "";

  for (const [k, v] of map) {
    if (max === v) {
      count++;
      if (count > 1) {
        return "?";
      }
      answer = k;
    }
  }
  return answer;
};

console.log(findWord());
