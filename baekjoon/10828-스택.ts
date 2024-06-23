//https://www.acmicpc.net/problem/10828
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input: string[]) {
  const stack: number[] = [];
  const answer: number[] = [];
  for (const x of input) {
    switch (x) {
      case "pop":
        answer.push(stack.pop() || -1);
        break;
      case "size":
        answer.push(stack.length);
        break;
      case "empty":
        answer.push(stack.length === 0 ? 1 : 0);
        break;
      case "top":
        answer.push(stack.at(-1) || -1);
        break;
      default:
        if (!Number(x)) {
          stack.push(Number(x.split(" ")[1]));
        }
        break;
    }
  }
  console.log(answer.join("\n"));
}

solution(input);
