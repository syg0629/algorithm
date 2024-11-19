//https://www.acmicpc.net/problem/7785
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const map = new Map();
for (const x of input) {
  const [name, records] = x.split(" ");
  if (records === "enter") {
    map.set(name, true);
  } else {
    map.delete(name);
  }
}
console.log([...map.keys()].sort().reverse().join("\n"));
