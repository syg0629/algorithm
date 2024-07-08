//https://www.acmicpc.net/problem/28235
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const map = new Map();
map.set("SONGDO", "HIGHSCHOOL");
map.set("CODE", "MASTER");
map.set("2023", "0611");
map.set("ALGORITHM", "CONTEST");

console.log(map.get(input));
