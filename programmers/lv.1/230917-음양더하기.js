//https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((p, c, i) => p + c * (signs[i] ? 1 : -1), 0);
}

//다시 해보기
