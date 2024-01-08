//https://school.programmers.co.kr/learn/courses/30/lessons/42839
export {};

function solution(numbers: string): number {
  const numberChars: string[] = numbers.split("");

  function findNum(numberChars: string[], fixedNum: string): number[] {
    return numberChars.flatMap((num, i) => {
      const newNum: string = fixedNum + num;
      const copyNumberChars: string[] = [...numberChars];
      copyNumberChars.splice(i, 1);

      const numberNewNum: number = Number(newNum);
      if (isPrime(numberNewNum)) {
        return [numberNewNum, ...findNum(copyNumberChars, newNum)];
      }
      return findNum(copyNumberChars, newNum);
    });
  }
  const primeSet: Set<number> = new Set(findNum(numberChars, ""));
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
