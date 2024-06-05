//https://www.acmicpc.net/problem/2920
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const input = fs.readFileSync(filePath).toString().trim();

const compare = [];
for (let i = 1; i <= 8; i++) {
  compare.push(i);
}
if (compare.join(" ") === input) {
  console.log("ascending");
} else if (compare.reverse().join(" ") === input) {
  console.log("descending");
} else {
  console.log("mixed");
}
