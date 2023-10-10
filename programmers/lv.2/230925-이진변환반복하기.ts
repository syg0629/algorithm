//https://school.programmers.co.kr/learn/courses/30/lessons/70129
export {};

function solution(s: string): number[] {
  let removedZeros: number = 0;
  let zeroLength: number = 0;
  let count: number = 0;
  while (s.length > 1) {
    const splitedS: string[] = s.split("");
    zeroLength = splitedS.filter((x: string) => x == "0").length;
    removedZeros += zeroLength;
    s = (s.length - zeroLength).toString(2);
    count++;
  }
  return [count, removedZeros];
}

console.log(solution("110010101001")); //[3,8]
console.log(solution("01110")); //[3,3]
console.log(solution("1111111")); //[4,1]
