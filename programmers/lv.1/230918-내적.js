//https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  a = a.map((n, i) => n * b[i]).reduce((p, c) => p + c);
  return a;
}

//reduce에 대해 자세히 공부할 것.......
