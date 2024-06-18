//https://www.acmicpc.net/problem/1966
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// input에서 개수와 테스트 케이스를 할당하기 위함
const [n, ...testCases] = input;

// 테스트케이스 수 만큼 반복문 돌리기
for (let i = 0; i < n; i++) {
  // 인쇄된 문서 수를 세기 위한 변수
  let count = 0;
  const [_, location]: number[] = testCases[i * 2].split(" ").map(Number);
  // 문서 중요도
  const queue = testCases[i * 2 + 1]
    .split(" ")
    .map(Number)
    .map((priority: number, i: number) => ({ priority, i }));

  while (queue.length > 0) {
    // 큐에서 첫 번째 문서를 꺼냄
    const current = queue.shift();
    if (
      // 현재 문서보다 우선순위가 높은 문서가 있는지 확인
      queue.some((doc: { priority: number }) => doc.priority > current.priority)
    ) {
      // 높은 문서가 있다면 현재 문서를 다시 큐의 끝에 추가
      queue.push(current);
    } else {
      // 문서를 인쇄
      count += 1;
      // 인쇄된 문서가 궁금한 문서인지 확인
      if (current.i === location) {
        // 인쇄된 순서 출력
        console.log(count);
        break;
      }
    }
  }
}
