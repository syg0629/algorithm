/**
 * 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력
 * 예) 32를 뒤집으면 23, 23은 소수 => 출력 / 910을 뒤집으면 19로
 * 첫 자리부터 연속된 0은 무시
 */
export {};

function isPrime(num: number): boolean {
  if (num === 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(arr: number[]): number[] {
  const prime: number[] = [];
  let reverseNum = 0;
  for (const x of arr) {
    reverseNum = Number(x.toString().split("").reverse().join(""));
    if (isPrime(reverseNum)) prime.push(reverseNum);
  }
  return prime;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100])); //[ 23, 2, 73, 2, 3 ]
