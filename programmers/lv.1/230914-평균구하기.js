//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let answer = 0;
  arr.forEach((el) => (answer += el));
  answer = answer / arr.length;
  return answer;
}
