//https://school.programmers.co.kr/learn/courses/30/lessons/70129
export {};

function solution(s: string): number[] {
  let removedZeros = 0;
  let zeroLength = 0;
  let count = 0;
  while (s.length > 1) {
    const splitedS = s.split("");
    zeroLength = splitedS.filter((x) => x == "0").length;
    removedZeros += zeroLength;
    s = (s.length - zeroLength).toString(2);
    count++;
  }
  return [count, removedZeros];
}

console.log(solution("110010101001")); //[3,8]
console.log(solution("01110")); //[3,3]
console.log(solution("1111111")); //[4,1]
