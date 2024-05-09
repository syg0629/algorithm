//https://www.acmicpc.net/problem/2805
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, h] = input.shift().split(" ");
const trees = input[0].split(" ").map(Number);

function solution(h: number, trees: number[]) {
  // 나무의 최소값 최대값을 알기 위해 정렬
  const sorted = trees.sort((x, y) => x - y);
  // 나무의 최소값
  let low = 0;
  // 나무의 최대값
  let high = sorted[sorted.length - 1];
  let answer = 0;

  while (low <= high) {
    // 나무의 중간값
    const mid = Math.floor((low + high) / 2);
    // 절단 후 남은 나무들 길이
    let sum = 0;
    // 정렬된 배열을 순회하며 중간값과 비교
    for (const x of sorted) {
      // 중간값보다 x가 더 크다면
      if (x > mid) {
        // 절단 후 남은 나무의 길이 더해줌
        sum += x - mid;
      }
    }
    // 절단 후 남은 나무의 길이 합(sum)과 가져 가려고 하는 나무의 길이(n)와 비교하여
    if (sum >= h) {
      answer = mid;
      // 절단하는 최소 높이를 올림
      low = mid + 1;
    } else {
      // 아니면 절단하려는 최대 높이를 내림
      high = mid - 1;
    }
  }
  return answer;
}

console.log(solution(h, trees)); // 15
