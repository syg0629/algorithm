//숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성

function factorial(num: number): number {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(--num);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
