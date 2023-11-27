//https://school.programmers.co.kr/learn/courses/30/lessons/42839
export {};

function solution(numbers: string): number {
  const splitedNum: string[] = numbers.split("");
  const set: Set<number> = new Set();

  findNum(set, splitedNum, "");

  return set.size;
}

function findNum(set: Set<number>, splitedNum: string[], fixedNum: string) {
  if (splitedNum.length >= 1) {
    for (let i = 0; i < splitedNum.length; i++) {
      const newNum: string = fixedNum + splitedNum[i];
      const copySplitedNum: string[] = [...splitedNum];
      copySplitedNum.splice(i, 1);
      if (isPrime(Number(newNum))) {
        set.add(Number(newNum));
      }
      findNum(set, copySplitedNum, newNum);
    }
  }
}

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(solution("17")); //3
console.log(solution("011")); //2
