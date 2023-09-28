//https://school.programmers.co.kr/learn/courses/30/lessons/12911
//230927 - 중복되는 코드 함수로 빼내기

function solution(n) {
  for (let i = 1; i < n; i++) {
    let sum = (n + i).toString(2).split("");
    if (changeBinaryCheck1(n) === changeBinaryCheck1(sum)) {
      return parseInt(sum.join(""), 2);
    }
  }
}

function changeBinaryCheck1(num) {
  return num
    .toString(2)
    .split("")
    .filter((x) => x == 1).length;
}
