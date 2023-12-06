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
      return splittedNum.flatMap((num, i) => {
        const newNum: string = fixedNum + num;
        const copySplittedNum: string[] = [...splittedNum];
        copySplittedNum.splice(i, 1);

        const numberNewNum: number = Number(fixedNum + num);
        if (isPrime(numberNewNum)) {
          primeNewNum.push(numberNewNum);
        }
        return findNum(copySplittedNum, newNum, primeNewNum);
      });
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
console.log(solution("143")); //6
