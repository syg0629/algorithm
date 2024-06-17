//https://www.acmicpc.net/problem/1929
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

const [firstNum, secondNum] = input;

// 소수를 판별하기 위함
const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  console.log(num);
};

// 두 수 사이의 숫자를 순회하기 위함
for (let i = firstNum; i <= secondNum; i++) {
  if (isPrime(i)) {
  }
}
