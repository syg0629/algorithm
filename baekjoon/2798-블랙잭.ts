//https://www.acmicpc.net/problem/2798
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [[n, target], card] = fs.readFileSync(filePath).toString().trim().split`
`.map((x: string) => x.split(` `).map(Number));

let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const currentNum = card[i] + card[j] + card[k];
      if (target >= currentNum && currentNum > max) max = currentNum;
    }
  }
}
console.log(max);
