//https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (const n of s.toUpperCase().split("")) {
    if (n === "P") {
      pCount++;
    } else if (n === "Y") {
      yCount++;
    }
  }

  return pCount === yCount;
}

// 다시 해보기
