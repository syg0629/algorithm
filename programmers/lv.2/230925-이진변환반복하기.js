//https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let removeZero = 0;
  let zeroLength = 0;
  let count = 0;
  while (s.length > 1) {
    s = s.split("");
    zeroLength = s.filter((x) => x == 0).length;
    removeZero += zeroLength;
    s = (s.length - zeroLength).toString(2);
    count++;
  }
  return [count, removeZero];
}

console.log(solution("110010101001")); //[3,8]
console.log(solution("01110")); //[3,3]
console.log(solution("1111111")); //[4,1]
