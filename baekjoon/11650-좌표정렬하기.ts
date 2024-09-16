// https://www.acmicpc.net/problem/11650

export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const coordinate = arr.map((x: string) => x.split(" ").map(Number));
coordinate.sort((a: number[], b: number[]) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

for (const x of coordinate) {
  console.log(x.join(" "));
}
