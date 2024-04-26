// 반복문으로 팩토리얼 구현
// function factorial(num: number): number {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }
// console.log(factorial(3));

// 재귀 호출로 팩토리얼 구현
// 호출 스택에서 호출을 지우는 방법은 반환하는 것
// 스택 오버 플로는 재귀가 멈추지 않는다는 의미 => 종료점이 없음
function factorialRecursion(num: number): number {
  if (num === 1) return 1;
  return num * factorialRecursion(num - 1);
}
console.log(factorialRecursion(3));
