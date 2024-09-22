//https://www.acmicpc.net/problem/15650
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer: number[] = [];
// curNum: 현재 선택할 수 있는 가장 작은 숫자, [1,2]를 선택한 후 curNum가 3이 되어 3부터 선택을 시작하게 함, 중복 방지
// len: 현재까지 선택한 숫자의 개수
const recur = (curNum: number, len: number) => {
  if (len === M) {
    console.log(...answer);
    return;
  }
  for (let i = curNum; i <= N; i++) {
    answer.push(i);
    recur(i + 1, len + 1);
    answer.pop();
  }
};
recur(1, 0);
