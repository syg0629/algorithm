//https://www.acmicpc.net/problem/7785
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const set = new Set();
for (const x of input) {
  const [name, records] = x.split(" ");
  if (records === "enter") {
    set.add(name);
  } else {
    set.delete(name);
  }
}
console.log([...set].sort().reverse().join("\n"));
