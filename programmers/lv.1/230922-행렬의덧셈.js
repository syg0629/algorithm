// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let e = 0; e < arr1[i].length; e++) {
      sum.push(arr1[i][e] + arr2[i][e]);
    }
    answer.push(sum);
  }
  return answer;
}

//다시 해보기
