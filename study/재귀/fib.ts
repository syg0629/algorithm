// 숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성
// 모든 수는 이전 두 수의 합과 같다

function fib(num: number): number {
  if (num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
}
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
