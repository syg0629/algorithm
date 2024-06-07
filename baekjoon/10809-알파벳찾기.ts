// https://www.acmicpc.net/problem/10809
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet.split("").forEach((v) => {
  console.log(input.indexOf(v));
});
