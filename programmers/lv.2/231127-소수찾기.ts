//https://school.programmers.co.kr/learn/courses/30/lessons/42839
export {};

function solution(numbers: string): number {
  const splittedNum: string[] = numbers.split("");

  function findNum(
    splittedNum: string[],
    fixedNum: string,
    primeNewNum: number[]
  ): number[] {
    if (splittedNum.length >= 1) {
      for (let i = 0; i < splittedNum.length; i++) {
        const newNum: string = fixedNum + splittedNum[i];
        const copySplittedNum: string[] = [...splittedNum];
        copySplittedNum.splice(i, 1);

        const numberNewNum: number = Number(fixedNum + splittedNum[i]);
        if (isPrime(numberNewNum)) {
          primeNewNum.push(numberNewNum);
        }
        primeNewNum = primeNewNum.concat(
          findNum(copySplittedNum, newNum, primeNewNum)
        );
      }
    }
    return primeNewNum;
  }
  const set: Set<number> = new Set(findNum(splittedNum, "", []));
  return set.size;
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
console.log(solution("143")); //6 [3, 13, 31, 41, 43, 431]
