//https://school.programmers.co.kr/learn/courses/30/lessons/42839
export {};

function solution(numbers: string): number {
  const splittedNum: string[] = numbers.split("");

  function findNum(
    set: Set<number>,
    splittedNum: string[],
    fixedNum: string
  ): number {
    let count = 0;

    if (splittedNum.length >= 1) {
      for (let i = 0; i < splittedNum.length; i++) {
        const newNum: string = fixedNum + splittedNum[i];
        const copySplittedNum: string[] = [...splittedNum];
        copySplittedNum.splice(i, 1);

        const numberNewNum: number = Number(fixedNum + splittedNum[i]);
        if (isPrime(numberNewNum) && !set.has(numberNewNum)) {
          set.add(numberNewNum);
          count++;
        }
        count += findNum(set, copySplittedNum, newNum);
      }
    }
    return count;
  }
  return findNum(new Set(), splittedNum, "");
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
