// 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 함수

function recursiveRange(num: number): number {
  if (num === 0) return 0;
  return num + recursiveRange(--num);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
