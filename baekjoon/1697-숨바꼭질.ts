//https://www.acmicpc.net/problem/1697
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
const chk = new Array(100001).fill(0);

const bfs = () => {
  const queue = [n];
  chk[n] = 1;
  let cnt = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      if (x === k) return cnt;
      for (const nx of [x - 1, x + 1, x * 2]) {
        if (nx >= 0 && nx <= 100000 && chk[nx] === 0) {
          chk[nx] = 1;
          queue.push(nx);
        }
      }
    }
    cnt++;
  }
};
console.log(bfs());
