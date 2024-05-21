// https://www.acmicpc.net/problem/1931
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const meetingTime = input.slice(1).map((x: string) => x.split(" ").map(Number));

const sortedMeetingTime = meetingTime.sort(
  (a: [number, number], b: [number, number]) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  }
);

let endTime = 0;
let count = 0;

for (const x of sortedMeetingTime) {
  if (x[0] >= endTime) {
    endTime = x[1];
    count++;
  }
}

console.log(count);
