//https://www.acmicpc.net/problem/1874
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();

let ans = [];
const stack = [];

// 스택은 1부터 차례대로만 넣을 수 있기 때문에 1을 시작 숫자로 지정
let stackNum = 1;

for (const x of input) {
  // stackNum은 1부터 x까지 증가
  // push할 때마다 ans 배열에 "+"를 push
  while (stackNum <= x) {
    stack.push(stackNum);
    stackNum++;
    ans.push("+");
  }

  // stack에 x까지 들어갔으므로 pop을 하면 x과 같은 숫자가 나옴
  // pop할 때마다 ans 배열에 "-"를 push
  const stackPop = stack.pop();
  ans.push("-");

  // stack에서 pop한 값과 x이 일치하지 않는다면 문제 조건에 맞춰서 수열로 만들어낼 수 없는 경우
  // ans 배열을 ["NO"]로 완전히 교체, for문을 종료
  if (stackPop !== x) {
    ans = ["NO"];
    break;
  }
}

console.log(ans.join("\n"));
