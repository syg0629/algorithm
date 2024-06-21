//https://www.acmicpc.net/problem/2164
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const card = [];
for (let i = 1; i <= Number(input); i++) {
  card.push(i);
}

let index = 0;
// card 배열의 크기와 index의 차이가 1보다 클 때까지 반복
while (card.length - index > 1) {
  // 앞에서 하나 제거하는 대신 index 증가
  index++;
  // 두 번째 카드를 배열 뒤로 이동 후 index 증가
  card.push(card[index++]);
}
console.log(card[index]);
