//https://school.programmers.co.kr/learn/courses/30/lessons/42839
export {};

function solution(numbers: string): number {
  const numberChars: number[] = numbers.split("").map(Number);

  function findNum(numberChars: number[], fixedNum: number): number[] {
    return numberChars.flatMap((num, i) => {
      const newNum: number = Number(fixedNum.toString() + num.toString());
      const numExceptI: number[] = numberChars
        .slice(0, i)
        .concat(numberChars.slice(i + 1));

      return isPrime(newNum)
        ? [newNum, ...findNum(numExceptI, newNum)]
        : findNum(numExceptI, newNum);
    });
  }
  const primeSet: Set<number> = new Set(findNum(numberChars, 0));
  return primeSet.size;
}

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(solution("17")); //3
console.log(solution("011")); //2
console.log(solution("143")); //6
