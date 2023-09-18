//https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const halfLength = s.length / 2;
  return s.length % 2 === 0
    ? s.split("")[halfLength - 1] + s.split("")[halfLength]
    : s.split("")[Math.floor(halfLength)];
}
