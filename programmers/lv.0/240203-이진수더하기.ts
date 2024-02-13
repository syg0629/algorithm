//https://school.programmers.co.kr/learn/courses/30/lessons/120885
export {};

function solution(bin1: string, bin2: string): string {
  return (binaryToDecimal(bin1) + binaryToDecimal(bin2)).toString(2);
}

const binaryToDecimal = (str: string): number => {
  const decimalNum = str
    .split("")
    .reverse()
    .map(Number)
    .map((x, y) => x * Math.pow(2, y))
    .reduce((x, y) => x + y);
  return decimalNum;
};

console.log(solution("10", "11")); //"101"
console.log(solution("1001", "1111")); //"11000"
