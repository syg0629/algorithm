//https://school.programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    return (answer = "Even");
  } else {
    return (answer = "Odd");
  }
  return answer;
}
