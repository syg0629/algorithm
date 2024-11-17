//https://www.acmicpc.net/problem/18258
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const queue = [];
const answer = [];
let frontIndex = 0;

for (const x of input) {
  if (x.startsWith("push")) {
    queue.push(x.split(" ")[1]);
  }
  if (x === "pop") {
    answer.push(frontIndex === queue.length ? -1 : queue[frontIndex++]);
  }
  if (x === "size") {
    answer.push(queue.length - frontIndex);
  }
  if (x === "empty") {
    answer.push(queue.length === frontIndex ? 1 : 0);
  }
  if (x === "front") {
    answer.push(queue.length === frontIndex ? -1 : queue[frontIndex]);
  }
  if (x === "back") {
    answer.push(frontIndex === queue.length ? -1 : queue[queue.length - 1]);
  }
}
console.log(answer.join("\n"));
