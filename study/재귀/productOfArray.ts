// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 함수

function productOfArray(arr: number[]): number {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
