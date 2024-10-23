//https://www.acmicpc.net/problem/2204
export {};

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input1.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let index = 0;
while (index < input.length) {
  const t = parseInt(input[index], 10);
  if (t === 0) break;

  const words = input.slice(index + 1, index + 1 + t);

  const result = words.reduce((smallest: string, current: string) =>
    current.toLowerCase().localeCompare(smallest.toLowerCase()) < 0
      ? current
      : smallest
  );

  console.log(result);
  index += t + 1;
}
