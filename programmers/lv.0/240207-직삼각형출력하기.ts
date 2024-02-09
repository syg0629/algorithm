//https://school.programmers.co.kr/learn/courses/30/lessons/120823
export {};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", function (line: string) {
  input = line.split(" ");
}).on("close", function () {
  const num: number = Number(input[0]);
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
});
