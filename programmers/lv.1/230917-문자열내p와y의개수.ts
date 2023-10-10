//https://school.programmers.co.kr/learn/courses/30/lessons/12916
export {};

function solution(s: string): Boolean {
  let pCount: number = 0;
  let yCount: number = 0;

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
console.log(solution("pPoooyY")); //true
console.log(solution("Pyy")); //false
