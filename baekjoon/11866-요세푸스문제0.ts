//https://www.acmicpc.net/problem/11866
export {};

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input1.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const queue: number[] = Array.from({ length: N }, (_, i) => i + 1);
const answer: number[] = [];

while (queue.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift()!);
  }
  answer.push(queue.shift()!);
}
console.log(`<${answer.join(', ')}>`);
