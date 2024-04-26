// Math.pow()의 기능을 모방

function power(num1: number, num2: number): number {
  if (num2 < 1) return 1;
  return num1 * power(num1, --num2);
}

console.log(power(2, 0)); // 1
console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
