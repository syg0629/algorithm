//https://www.acmicpc.net/problem/7568
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x: string) => x.split(" ").map(Number));
const rank = [];

for (let i = 0; i < input.length; i++) {
  let grade = 1;
  for (let j = 0; j < input.length; j++) {
    if (i !== j) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) grade++;
    }
  }
  rank.push(grade);
}

console.log(rank.join(" "));
